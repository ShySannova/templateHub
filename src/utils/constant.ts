export const apiUrl = import.meta.env.VITE_BACKEND_API_URL; // Make sure to set this in your Vite environment


export const REGISTER_URL = apiUrl + "register"
export const LOGIN_URL = apiUrl + "login"
export const LOGOUT_URL = apiUrl + "logout"

export const USER_URL = apiUrl + "user"
export const GET_TEMPLATE_URL = apiUrl + "template/all"
export const CREATE_TEMPLATE_URL = apiUrl + "template/create"
export const UPDATE_TEMPLATE_URL = apiUrl + "template/update"

export const REFRESH_TOKEN_URL = apiUrl + "refresh-token"
export const COOKIES_REMOVER_URL = apiUrl + "cookies-remover"
export const FORGOT_PASSWORD_URL = apiUrl + "forgot-password"
export const RESET_PASSWORD_URL = apiUrl + "reset-password"
export const CHANGE_PASSWORD_URL = apiUrl + "change-password"
export const VERIFY_PASSWORD_RESET_URL = apiUrl + "verify-password-reset-page"
