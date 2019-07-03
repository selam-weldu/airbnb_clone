import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.id) }
);

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);



export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));