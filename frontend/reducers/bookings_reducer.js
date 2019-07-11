import {
    RECEIVE_BOOKINGS,
    RECEIVE_BOOKING,
    REMOVE_BOOKING 
} from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;

        case RECEIVE_BOOKING:
            newState[action.booking.id] = action.booking;
            return newState;

        case REMOVE_BOOKING:
            delete newState[action.bookingId];
            return newState;

        default:
            return state;
    }

};

export default bookingsReducer;


