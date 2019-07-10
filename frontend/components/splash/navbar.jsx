import React from 'react';


const Navbar = ({ currentUser, logout, openModal }) => {

    const beforeSession = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('signup')}>Sign up</button>
            &nbsp;&nbsp;
            <button onClick={() => openModal('login')}>Log in</button>
        </nav>
    );
    const afterSession = () => (
        <nav className="login-signup">
            <h2 className="welcome-name">Welcome, {currentUser.username}!</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return (
        currentUser ? afterSession(currentUser, logout) : beforeSession()
    );
};

export default Navbar;