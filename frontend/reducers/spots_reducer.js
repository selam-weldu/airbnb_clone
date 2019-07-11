import merge from 'lodash/merge';
import {
    RECEIVE_SPOTS,
    RECEIVE_SPOT
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = merge({},state)

    // debugger
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;

        case RECEIVE_SPOT:
            // debugger
            nextState[action.payload.id] = action.payload;
            return nextState;
        default:
            return state;
    } 
};

export default spotsReducer;