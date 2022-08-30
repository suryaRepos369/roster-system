import CryptoJS from "crypto-js";
let style = "color: white; background-color: orange";

export const Encryption = async (data) => {
  let mode = CryptoJS.mode.CBC;
  let padding = CryptoJS.pad.Pkcs7;

  var key = CryptoJS.enc.Utf8.parse("qhZzhI2FOgPcaSQ=");
  var iv = CryptoJS.enc.Utf8.parse("qhZzhI2FOgPcaSQ=");

  // ENCRYPTING HERE
  var cipherData = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(JSON.stringify(data)),
    key,
    {
      keySize: 128 / 8,
      iv: iv,
      mode: mode,
      padding: padding,
    }
  );

  // printing the results
  let extractedBase64Key = CryptoJS.enc.Base64.stringify(cipherData.key); // base64-encoded string
  let extractedBase64IV = CryptoJS.enc.Base64.stringify(cipherData.iv); // base64-encoded string
  let extractedBase64Cipher = cipherData.ciphertext.toString(
    CryptoJS.enc.Base64
  );

  return extractedBase64Cipher;
};
