import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

export default combineReducers({
    modal: modalReducer
});