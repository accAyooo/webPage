import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "./actionTypes";
import * as status from '../../constants/fetchState';

export default (state = {userinfo: {status: status.LOADING}}, action) => {
    switch (action.type) {
        case FETCH_START:
            return {...state, userinfo: {status: status.LOADING}};
        case FETCH_SUCCESS:
            return {...state, userinfo: {status: status.SUCCESS, data: action.result}};
        case FETCH_FAIL:
            return {...state, userinfo: {status: status.FAIL, data: action.result}};
        default :
            return state;
    }
}