import React from 'react';
import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute } from '../util/route_util';
import SpotIndexContainer from './spot/spot_index_container';
import Splash from './navbar/splash';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


const App = () => (
        <div>
            <Switch>
                <Route exact path="/spots" component={SpotIndexContainer} />
                <Route path="/" component={Splash} />
            </Switch>    
        </div>
);

export default App;
