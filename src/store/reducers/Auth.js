import { GET_PROFILE_SUCCESS, LOGIN_SUCCESS } from "../actiontypes/index.js";

const INITIAL_STATE = {
    accessToken: "",
    refreshToken: "",
    profile: ""
};
const Auth = (state = INITIAL_STATE, { type, payload}) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: payload.data.access_token,
                refreshToken: payload.data.refresh_token
            }; 

        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: payload.data.email
            };

        default:
            return state;
    }
};

export default Auth;