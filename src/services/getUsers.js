import { requestUserList, successUserList, errorUserList } from "../store/actions/usersAction";
import axios from 'axios';
const getUsers = () => {
    return function (dispatch, getState) {
        if(getState().user.user.length){
            return dispatch(successUserList(getState().user.user));
        }
        dispatch(requestUserList());
        return axios
            .get('https://jsonplaceholder.typicode.com/users').then(res => res)
            .then(res => {
                if (res.status === 200) {
                    dispatch(successUserList(res.data));
                }
            }).catch((err) => dispatch(errorUserList(err)));
    }
}

export default getUsers;