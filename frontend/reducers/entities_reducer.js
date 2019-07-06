import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import spotsReducer from './spots_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    spots: spotsReducer
});

export default entitiesReducer;