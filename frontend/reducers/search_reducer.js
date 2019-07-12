import { RECEIVE_SEARCH } from '../actions/search_actions';
import merge from 'lodash/merge';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH:
            return merge({}, state, action.search);
        default:
            return state;
    }
}

export default searchReducer;