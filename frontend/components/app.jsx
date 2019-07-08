import React from 'react';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import Splash from './navbar/splash';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


const App = () => (
        <div>
            <Switch>
                <Route exact path="/spots" component={SearchContainer} />
                <Route path="/" component={Splash} />
            </Switch>    
        </div>
);

export default App;
