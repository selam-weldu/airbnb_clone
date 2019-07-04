import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
});

export const signup = user => dispatch => (
    SessionApiUtil.signup(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
            err => (dispatch(receiveErrors(err.responseJSON))))
);

export const login = user => dispatch => (
    SessionApiUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
            err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(user => (dispatch(logoutCurrentUser())))
);