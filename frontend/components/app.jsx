import React from 'react';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import Splash from './splash/splash';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SpotShowContainer from './spot_show/spot_show_container';


const App = () => (
        <div>
            <Switch>
                {/* <Route path="/show" component={SpotShowContainer}/> */}
                <Route path="/spots/:spotId" component={SpotShowContainer}/>
                <Route path="/spots" component={SearchContainer} />
                <Route path="/" component={Splash} />
            </Switch>    
        </div>
);

export default App;
