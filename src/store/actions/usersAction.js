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

export const requestUserList = () => ({
  type: REQUEST_USER_LIST,

});

export const successUserList = (userData) => ({
  type: SUCCESS_USER_LIST,
  userData
});

export const errorUserList = () => ({
  type: USER_LIST_ERROR
})


export const handleDeleteUser = (id, index) => ({
  type: REMOVE_USER,
  id, index
});


export const requestUserInfo = () => ({
  type: REQUEST_USER_INFO,

});

export const successUserInfo = (info) => ({
  type: SUCCESS_USER_INFO,
  info
});

export const errorUserInfo = () => ({
  type: USER_INFO_ERROR
})




