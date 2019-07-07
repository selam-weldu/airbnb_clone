import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//Testing
// import * as SpotApiUtil from './util/spot_api_util';
import { fetchSpots } from './actions/spot_actions';
import { signup } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchSpots = fetchSpots;
    // window.fetchSpot = fetchSpot;
    window.signup = signup;
    //TESTING 

    ReactDOM.render(<Root store={store}/>, root);
});