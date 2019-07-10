import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import merge from 'lodash/merge';
import { RECEIVE_SPOT } from '../actions/spot_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({},state);

    switch (action.type) {
        
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;    
            return newState;

        case RECEIVE_SPOT:
            return merge({},state,{[action.payload.users.id]: action.payload.users})
        
        default:
            return state;
    }
};

export default usersReducer;