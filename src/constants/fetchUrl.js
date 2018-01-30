const DOMAIN = process.env.NODE_ENV !== 'production' ? "http://localhost:3001" : "";

// 登陆
export const LOGIN_URL = DOMAIN + "/ajax/account/login";

// 获取用户信息
export const GET_USER_INFO_URL = DOMAIN + "/ajax/account/userinfo";