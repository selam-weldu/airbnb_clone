import {
    RECEIVE_BOOKINGS,
    RECEIVE_BOOKING,
    REMOVE_BOOKING 
} from '../actions/booking_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_BOOKINGS:
            // return action.bookings;
            return merge({}, state, action.bookings);

        case RECEIVE_BOOKING:
            return merge({}, state, action.payload.bookings);

        case REMOVE_BOOKING:
            delete newState[action.bookingId];
            return newState;

        case RECEIVE_USER:
            return merge({},state,action.payload.bookings);
            
        default:
            return state;
    }

};

export default bookingsReducer;



