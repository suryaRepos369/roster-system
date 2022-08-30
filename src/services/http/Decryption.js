import CryptoJS from "crypto-js";
let style = "color: white; background-color: orange";

export const Decryption = async (encryptedData) => {
  let mode = CryptoJS.mode.CBC;
  let padding = CryptoJS.pad.Pkcs7;

  var key = CryptoJS.enc.Utf8.parse("qhZzhI2FOgPcaSQ=");
  var iv = CryptoJS.enc.Utf8.parse("qhZzhI2FOgPcaSQ=");

  // decrypting the data
  var decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: iv,
    mode,
    padding,
  });

  // return plaint text of the decrypted data
  let decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
};
