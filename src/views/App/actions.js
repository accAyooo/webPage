import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./actionTypes.js";
import { GET_USER_INFO } from "../../constants/fetchUrl";

export const fetchUserStart = () => ({
    type: FETCH_START
});

export const fetchUserSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchUserFailure = (error) => ({
    type: FETCH_FAIL,
    error
})

export const fetchGetUserInfo = (username, password) => {

    return (dispatch) => {
        fetch("http://localhost:8081" + GET_USER_INFO).then((result) => {
            try {
                if (result.status === 200) {
                    result.json().then((resultJson) => {
                        console.log(resultJson)
                    })
                } else {
                    throw new Error("fail to get response(userinfo) with status" + result.status);
                }
            } catch (error) {
                fetchUserFailure(error.message);
            }
        })
    }
}