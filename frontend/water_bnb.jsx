import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as SessionApiUtils from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    //TESTING
    window.logout = SessionApiUtils.logout;
    window.login = SessionApiUtils.login;
    window.signup = SessionApiUtils.signup;
    //TESTING 

    ReactDOM.render(<Root />, root);
});