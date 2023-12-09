"use strict";

// uncomment this for staging build
// const BASE_URL = "https://uat.ai.umangapp.in";
const BASE_URL = "https://ai.umangapp.in";
const BOT_ID = "IoFO80+kNvXKKZwuVo83SQ==";

function generateTempKey() {
  let tempKey = "";
  const length = 12;
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= length; i++) {
    tempKey += chars[Math.floor(Math.random() * chars.length)];
  }
  localStorage.setItem("tempKey", tempKey);
}

function getMACAddress() {
  const fma = "XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX".replace(/X/g, () =>
    "0123456789abcdef".charAt(Math.floor(Math.random() * 16))
  );
  return fma.replace(/:/g, "");
}

function encryptData(data) {
  const secret = localStorage.getItem("tempKey");
  let key = CryptoJS.enc.Utf8.parse(secret);
  let iv = CryptoJS.enc.Utf8.parse(secret);
  let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    keySize: 256,
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

function decryptData(data) {
  const parsedData = atob(data);
  const parsedDataSplit = parsedData.split("::");
  const toDecryptData = parsedDataSplit[parsedDataSplit.length - 1];
  const iv = parsedDataSplit[0];
  const salt = parsedDataSplit[1];
  const passphrase = "myverysecretphrase";

  const key = CryptoJS.PBKDF2(passphrase, CryptoJS.enc.Hex.parse(salt), {
    keySize: 4,
    iterations: 100,
  });

  const decryptedData = CryptoJS.AES.decrypt(toDecryptData, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });

  return decryptedData.toString(CryptoJS.enc.Utf8);
}

function initSenseforthChatSDK() {
  var senseforthSDKconfig = {
    botID: BOT_ID,
    version: "prod",
    source: "web",
    SF_BASE_URL: BASE_URL,
    SF_CHAT_URL: BASE_URL,
  };

  const sdk = new SenseforthChatSDK(senseforthSDKconfig);
  sdk.init();
}

/**
 * Function that stores user login data.
 */
function onLoginEssentials(userDetails) {
  const userData = userDetails?.data?.pd;
  if (!userData) {
    return;
  }

  const userMobileNo = userData?.generalpd?.mno;

  const userProfileResp = {
    did: "",
    imei: "",
    imsi: "",
    hmk: "",
    hmd: "",
    os: "CHROME",
    pkg: "",
    ver: "1",
    tkn: userData?.tkn,
    rot: "",
    mod: "web",
    mcc: "",
    mnc: "",
    lac: "",
    clid: "",
    acc: "",
    rc: "SU000",
    trkr: "UW-AST1486560987759",
    usag: "null",
    service_id: "0",
    rs: "S",
    rd: "Success",
    lat: "",
    lon: "",
    peml: "",
    lang: "en",
    aadhr: "",
    macAddress: getMACAddress(),
    mPinFlag: userData?.mpinflag,
    userinfo: userData?.generalpd,
  };

  userMobileNo && localStorage.setItem("mno", userMobileNo);
  debugger;
  // !"userData" in localStorage &&
    localStorage.setItem("userData", encryptData(JSON.stringify({})));
    localStorage.setItem(
      'loginSession',
      JSON.stringify({
        timestamp: Date.now(),
      })
    );
  localStorage.setItem(
    "userInfo",
    encryptData(JSON.stringify(userProfileResp))
  );
}

/**
 * Function called when user logs in & out from chat-bot.
 */
function umangChatbot(authData) {
  if (!authData) {
    return;
  }

  const profileData = JSON.parse(decryptData(authData));

  // If user is logged out form chat-bot
  if (profileData?.loginStatus !== "true") {
    const toRemoveKeys = [
      "userInfo",
      "userData",
      "mno",
      "tempKey",
      "loginSession",
    ];
    toRemoveKeys.forEach((key) => {
      localStorage.removeItem(key);
    });
    return;
  }

  generateTempKey();
  onLoginEssentials(JSON.parse(profileData.userDetails));
}
