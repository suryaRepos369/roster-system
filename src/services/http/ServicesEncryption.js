import { AxiosClient } from "./AxiosClient";
import { getFromSession, saveToSession } from "../storage/SessionStorage";
import { WhiteListedURL } from "./WhiteListedURL";
import { RefreshAccessToken } from "../../helper";
import { Encryption } from "./Encryption";
import { Decryption } from "./Decryption";
import { errorToast } from "../../components/core";

/**
 * @reference {https://gist.github.com/Godofbrowser/bf118322301af3fc334437c683887c5f}
 */

// REQUEST INTERCEPTOR for API calls
AxiosClient.interceptors.request.use(
  async (request) => {
    // If the request is not from whitelisted URL, then add the access token to the request
    if (!WhiteListedURL.includes(request.url)) {
      let loginData = getFromSession("loginData");
      request.headers = {
        Authorization: `Bearer ${loginData?.token}`,
        mode: "no-cors",
      };
    }

    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

const shouldIntercept = (error) => {
  try {
    return error.response.status === 401;
  } catch (e) {
    return false;
  }
};

const setTokenData = (tokenData = {}, axiosClient) => {
  const { accessToken, refreshToken } = tokenData;
  let loginData = getFromSession("loginData");
  let newLoginData = { ...loginData };
  newLoginData.token = accessToken;
  newLoginData.refreshToken = refreshToken;
  saveToSession("loginData", newLoginData);
};

const attachTokenToRequest = (request, token) => {
  request.headers["Authorization"] = "Bearer " + token;
};

let isRefreshing = false;
let failedQueue = [];
let TimeOutErrorMessage =
  "Its taking too long to connect to the server, Please check your Internet connection";

const options = {
  attachTokenToRequest,
  RefreshAccessToken,
  setTokenData,
  shouldIntercept,
};

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// RESPONSE INTERCEPTOR for API calls
AxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!options.shouldIntercept(error)) {
      // timeout error
      if (error.code === "ECONNABORTED") {
        errorToast(TimeOutErrorMessage);
        return null;
      }
      // other errors
      else {
        errorToast(error?.message);
        return Promise.reject(error);
      }
    }

    if (error.config._retry || error.config._queued) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;
    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest._queued = true;
          options.attachTokenToRequest(originalRequest, token);
          return AxiosClient.request(originalRequest);
        })
        .catch((err) => {
          // Ignore refresh token request's "error" and return the actual "error" of the original request
          return Promise.reject(error);
        });
    }

    originalRequest._retry = true;
    isRefreshing = true;
    return new Promise((resolve, reject) => {
      options.RefreshAccessToken.call(options.RefreshAccessToken)
        .then((tokenData) => {
          options.setTokenData(tokenData, AxiosClient);
          options.attachTokenToRequest(originalRequest, tokenData.accessToken);
          processQueue(null, tokenData.accessToken);
          resolve(AxiosClient.request(originalRequest));
        })
        .catch((err) => {
          processQueue(err, null);
          reject(err);
        })
        .finally(() => {
          isRefreshing = false;
        });
    });
  }
);

const UpdateTheResponse = async (response) => {
  let DecryptedData = await Decryption(response?.data?.response);
  let updatedResponse = { ...response };
  updatedResponse.data = DecryptedData;
  return updatedResponse;
};

export const getApi = async (url) => {
  const response = await AxiosClient.get(url);
  let updatedResponse = await UpdateTheResponse(response);
  return updatedResponse;
};

export const postApi = async (url, data) => {
  let response;
  // Encrypt the data before sending to the server
  if (data) {
    let encryptedData = await Encryption(data);
    response = await AxiosClient.post(url, { body: encryptedData });
  }
  // no data to encrypt - used for update notifications only
  else {
    response = await AxiosClient.post(url);
  }

  let updatedResponse = await UpdateTheResponse(response);
  return updatedResponse;
};
