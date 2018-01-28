import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "./actionTypes";
import * as status from '../../constants/fetchState';

export default (state = {status: status.LOADING}, action) => {
    switch (action.type) {
        case FETCH_START:
            return {status: status.LOADING};
        case FETCH_SUCCESS:
            return {status: status.SUCCESS};
        case FETCH_FAIL:
            return {status: status.FAIL};
        default :
            return state;
    }
}