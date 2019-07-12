import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import merge from 'lodash/merge';
import { RECEIVE_SPOT } from '../actions/spot_actions';
import {RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({},state);

    switch (action.type) {
        
        // case RECEIVE_CURRENT_USER:
        //     newState[action.currentUser.id] = action.currentUser;    
        //     return newState;

        case RECEIVE_CURRENT_USER:
            return merge({}, state, action.currentUser.users);

        case RECEIVE_SPOT:
            return merge({}, state, action.payload.users);

        case RECEIVE_USER:
            return merge({}, state, action.payload.users);
        
        default:
            return state;
    }
};

export default usersReducer;


// case RECEIVE_CURRENT_USER:
// return merge({}, state, action.currentUser.users);
