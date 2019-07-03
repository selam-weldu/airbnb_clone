import React from 'react';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>
    </div>
);

export default App;