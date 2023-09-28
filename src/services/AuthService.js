import {
    API_INVOCATION,
    FORGOT_PASSWORD,
    GET_PROFILE,
    GET_TOKEN_VALIDATION,
    LOGIN,
    UPDATE_PASSWORD
} from "../store/actiontypes/index.js";
import { GET, PATCH, POST, PUT } from "../utils/apiConstant";
import {
    ADMIN_AUTH,
    FORGOT_PASSWORD_URL,
    GETPROFILE,
    REFRESH_TOKEN_URL,
    UPDATEPASSWORD,
    UPDATE_NAME
} from "../utils/url";

class AuthService {
    // get Profile
    getProfile(_payload, resolve, reject) {
        const URLSearchParams = window.URLSearchParams;
        let query = new URLSearchParams();

        if (_payload?.name) {
            query.append("name", _payload?.name);
        }
        if (_payload?.nameId) {
            query.append("id", _payload?.nameId);
        }

        const payload = {
            action: GET_PROFILE,
            method: GET,
            apiConfig: {
                headers: {
                    "Content-Type": "application/json"
                }
            },
            url: GETPROFILE,
            resolve,
            reject
        };
        return { type: API_INVOCATION, payload };
    }

    updateProfile(_payload, resolve, reject) {
        const payload = {
            action: UPDATE_NAME,
            method: PATCH,
            apiConfig: {
                headers: {
                    "Content-Type": "application/json"
                }
            },
            url: UPDATE_NAME,
            resolve,
            reject,
            data: _payload.data
        };
        return { type: API_INVOCATION, payload };
    }

    ForgotPassword(_payload, resolve, reject) {
        const payload = {
            action: FORGOT_PASSWORD,
            method: PUT,
            apiConfig: {
                headers: {
                    "Content-Type": "application/json"
                }
            },
            url: FORGOT_PASSWORD_URL,
            resolve,
            reject,
            data: _payload.data
        };
        return { type: API_INVOCATION, payload };
    }

    // login
    auth(_payload, resolve, reject) {
        const payload = {
            action: LOGIN,
            method: POST,
            apiConfig: {
                headers: {
                    "Content-Type": "application/json"
                }
            },
            url: ADMIN_AUTH,
            resolve,
            reject,
            data: _payload.data
        };
        return { type: API_INVOCATION, payload };
    }

    // changePassword
    changePassword(_payload, resolve, reject) {
        const payload = {
            action: UPDATE_PASSWORD,
            method: POST,
            apiConfig: {
                headers: {
                    "Content-Type": "application/json"
                }
            },
            url: UPDATEPASSWORD,
            resolve,
            reject, 
            data: _payload
        };
        return { type: API_INVOCATION, payload };
    }

    // refreshToken
    refreshToken(_payload, resolve, reject) {
        const payload = {
            action: GET_TOKEN_VALIDATION,
            method: POST,
            apiConfig: {
                headers: {
                    "Content-Type": "application/json"
                }
            },
            url: REFRESH_TOKEN_URL,
            resolve,
            reject,
            data: _payload
        };
        return { type: API_INVOCATION, payload };
    }
}

export default new AuthService();