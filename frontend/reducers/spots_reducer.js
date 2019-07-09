import merge from 'lodash/merge';
import {
    RECEIVE_SPOTS,
    RECEIVE_SPOT
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({},state);
    // debugger
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;

        case RECEIVE_SPOT:
            newState[action.spot.id] = action.spot;
            return newState;

        default:
            return state;
    } 
};

export default spotsReducer;