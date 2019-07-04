import React from 'react';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
    <div>
        <div className="main-container">
            <div className="nav-bar">
                <div className="logo">Logo</div>
                <Modal />
            <header>
                <GreetingContainer />
            </header>
            </div>
        </div>
    </div>
);

export default App;