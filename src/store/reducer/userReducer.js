// @flow
import {
    REQUEST_USER_LIST,
    SUCCESS_USER_LIST,
    USER_LIST_ERROR,
    REMOVE_USER,
    REQUEST_USER_INFO,
    SUCCESS_USER_INFO,
    USER_INFO_ERROR
} from "../constant/userConstant";

let initialState = {
    loading: false,
    user: [],
    userDetails: {},
    error: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER_LIST:
            return {
                ...state,
                user: [],
                loading: true,
                error: false
            };
        case SUCCESS_USER_LIST:
            return {
                ...state,
                user: action.userData,
                loading: false,
                error: false
            };

        case USER_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case REMOVE_USER:
            let updateUser = [...state.user];
            updateUser.splice(action.index, 1);
            return {
                ...state,
                user: updateUser
            }
        case REQUEST_USER_INFO:
            return {
                ...state,
                userDetails: {},
                loading: true,
                error: false
            };
        case SUCCESS_USER_INFO:
            return {
                ...state,
                userDetails: action.info,
                loading: false,
                error: false
            };

        case USER_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
};

export default userReducer;
