import React from 'react';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
    <div>
        <div class="main-container">
            <div class="nav-bar">
                <div class="logo">Logo</div>
                <Modal />
            </div>
            <header>
                <GreetingContainer />
            </header>
        </div>
    </div>
);

export default App;