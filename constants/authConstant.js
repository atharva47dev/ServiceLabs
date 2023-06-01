/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = {
  User:1,
  Admin:2,
};

const PLATFORM = { ADMIN:1, };

let LOGIN_ACCESS = {
  [USER_TYPES.User]:[PLATFORM.ADMIN],        
  [USER_TYPES.Admin]:[PLATFORM.ADMIN],        
};

const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const SEND_LOGIN_OTP = { SMS:1, };
const DEFAULT_SEND_LOGIN_OTP = SEND_LOGIN_OTP.SMS;

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRE_TIME: 15
};
const NO_OF_DEVICE_ALLOWED = 1;

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  SEND_LOGIN_OTP,
  DEFAULT_SEND_LOGIN_OTP,
  FORGOT_PASSWORD_WITH,
  NO_OF_DEVICE_ALLOWED,
  LOGIN_ACCESS,
};