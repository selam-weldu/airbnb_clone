import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import filterReducer from './filters_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
    modal: modalReducer,
    filters: filterReducer,
    search: searchReducer
});