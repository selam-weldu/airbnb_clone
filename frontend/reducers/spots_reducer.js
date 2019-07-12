import merge from 'lodash/merge';
import {
    RECEIVE_SPOTS,
    RECEIVE_SPOT
} from '../actions/spot_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SPOTS:
            return merge({}, state, action.spots);

        case RECEIVE_SPOT:
            return merge({}, state, action.payload.spots);

        case RECEIVE_USER:
            return merge({},state, action.payload.spots);
                
        default:
            return state;
    } 
};

export default spotsReducer;

