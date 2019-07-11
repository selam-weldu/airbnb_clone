import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import spotsReducer from './spots_reducer';
import bookingsReducer from './bookings_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    spots: spotsReducer,
    bookings: bookingsReducer
});

export default entitiesReducer;