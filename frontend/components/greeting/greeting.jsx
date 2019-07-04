import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('signup')}>Signup</button>
            &nbsp;&nbsp;
            <button onClick={() => openModal('login')}>Login</button>
        </nav>
    );
    const personalGreeting = () => (
        <div className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;