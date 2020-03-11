import {successUserInfo, requestUserInfo, errorUserInfo } from "../store/actions/usersAction";
import axios from 'axios';

const getUserInfo = (userId) => {
    return function (dispatch) {
        dispatch(requestUserInfo());
        return axios
            .get('https://jsonplaceholder.typicode.com/users/' + userId).then(res => res)
            .then(res => {
                if (res.status === 200) {
                    dispatch(successUserInfo(res.data));
                }
                else {
                   // NotificationManager.error("Something went wrong");
                }
            }).catch((err) => dispatch(errorUserInfo(err)));
    }
}

export default getUserInfo;