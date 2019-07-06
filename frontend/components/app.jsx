import React from 'react';
import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute } from '../util/route_util';
import SpotIndexContainer from './spot/spot_index_container'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


const App = () => (
        <div className="main-container">
            <div className="nav-bar">
                <div className="logo"></div>
                <Modal />
                <header>
                    <NavbarContainer />
                </header>
            </div>

        <Switch>
            {/* <AuthRoute exact path="/spots" component={SpotIndexContainer} /> */}
            <Route exact path="/spots" component={SpotIndexContainer} />
            {/* <Route path="/" component={NavbarContainer} /> */}
        </Switch>    

        </div>
);

export default App;
