import React from 'react';


const Navbar = ({ currentUser, logout, openModal }) => {

    const beforeSession = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('signup')}>Signup</button>
            &nbsp;&nbsp;
            <button onClick={() => openModal('login')}>Login</button>
        </nav>
    );
    const afterSession = () => (
        <nav className="login-signup">
            <h2 className="welcome-name">Hi, {currentUser.username}!</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return (
        currentUser ? afterSession(currentUser, logout) : beforeSession()
    );
};

export default Navbar;