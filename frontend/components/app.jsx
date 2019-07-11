import React from 'react';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import Splash from './splash/splash';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SpotShowContainer from './spot/spot_show/spot_show_container';
import BookingShowContainer from './booking/booking_show_container';
import Modal from '../components/modal/modal';


const App = () => (
        <div>
            <Modal />
            <Switch>
                <Route path="/booking" component={BookingShowContainer}/>
                <Route path="/spots/:spotId" component={SpotShowContainer}/>
                <Route path="/spots" component={SearchContainer} />
                <Route path="/" component={Splash} />
            </Switch>    
        </div>
);

export default App;
