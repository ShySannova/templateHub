import { Role } from "./types";

export const apiUrl = import.meta.env.VITE_BACKEND_API_URL; // Make sure to set this in your Vite environment


export const REGISTER_URL = apiUrl + "register"
export const REGISTER_DEVELOPER_URL = apiUrl + "register-developer"
export const REGISTER_EMPLOYEE_URL = apiUrl + "register-employee"
export const LOGIN_URL = apiUrl + "login"
export const LOGOUT_URL = apiUrl + "logout"
export const VERIFY_ACCOUNT_URL = apiUrl + "verify-account"
export const REQUEST_NEW_VERIFICATION_CODE_URL = apiUrl + "request-new-verification-code"

export const USER_URL = apiUrl + "user"
export const GET_EMPLOYEES_URL = apiUrl + "user/employees"
export const SET_EMPLOYEE_ROLE_URL = apiUrl + "employee/add-role"
export const GET_TEMPLATE_URL = apiUrl + "template/all"
export const GET_USER_TEMPLATE_URL = apiUrl + "template/user/"
export const GET_ONE_TEMPLATE_URL = apiUrl + "template"
export const CREATE_TEMPLATE_URL = apiUrl + "template/create"
export const UPDATE_TEMPLATE_URL = apiUrl + "template/update"
export const DELETE_TEMPLATE_URL = apiUrl + "template/delete"

export const REFRESH_TOKEN_URL = apiUrl + "refresh-token"
export const COOKIES_REMOVER_URL = apiUrl + "cookies-remover"
export const FORGOT_PASSWORD_URL = apiUrl + "forgot-password"
export const RESET_PASSWORD_URL = apiUrl + "reset-password"
export const CHANGE_PASSWORD_URL = apiUrl + "change-password"
export const VERIFY_PASSWORD_RESET_URL = apiUrl + "verify-password-reset-page"

export const REQ_LOGS_DOWNLOAD_URL = apiUrl + "download-all-reqlogs"
export const ERR_LOGS_DOWNLOAD_URL = apiUrl + "download-all-errlogs"

export const roles: Role[] = ["Admin", "Developer", "Editor", "Author"]
