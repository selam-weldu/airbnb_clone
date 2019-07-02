import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING 

    ReactDOM.render(<Root store={store}/>, root);
});