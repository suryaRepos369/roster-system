import { ENDPOINTS } from "../services/http/EndPoints";
import {
  getFromSession,
  removeFromSession,
} from "../services/storage/SessionStorage";
import axios from "axios";
import { errorToast } from "../components/core";

export const RefreshAccessToken = () => {
  const loginData = getFromSession("loginData");
  const refreshPayload = {
    accessToken: loginData?.token,
    refreshToken: loginData?.refreshToken,
    userType: 2,
  };

  return new Promise((resolve, reject) => {
    axios
      .post(
        process.env.REACT_APP_BASE_URL + ENDPOINTS.REFRESH_TOKEN,
        refreshPayload
      )
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        errorToast("Unable to continue the session, Please Login Again");
        sessionStorage.clear();
        window.location.href = "/";
        reject(err);
      });
  });
};
