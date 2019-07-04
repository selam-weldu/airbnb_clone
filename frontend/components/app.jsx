import React from 'react';
import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';


const App = () => (
        <div className="main-container">
            <div className="nav-bar">
                <div className="logo"></div>
                <Modal />
                <header>
                    <NavbarContainer />
                </header>
            </div>
        </div>
);

export default App;