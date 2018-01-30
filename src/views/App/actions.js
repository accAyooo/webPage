import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./actionTypes.js";
import { GET_USER_INFO_URL } from "../../constants/fetchUrl";
import * as fetch from "../../utils/fetch.js";

export const fetchUserStart = () => ({
    type: FETCH_START
});

export const fetchUserSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchUserFailure = (result) => ({
    type: FETCH_FAIL,
    result
})

export const fetchGetUserInfo = (username, password) => {
    return (dispatch) => {
        fetch.get(GET_USER_INFO_URL, {}).then((result) => {
            try {
                if (result.status !== 200) {
                    throw new Error("failed to get user info from server");
                }
                result.json().then((resultJson) => {
                    dispatch(fetchUserSuccess(resultJson.data));
                })
            } catch (error) {
                dispatch(fetchUserFailure(error))
            }
        })
    }
}