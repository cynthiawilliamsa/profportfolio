import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import WhoIAm from './whoiam';
import Contact from './reachout';
import SeeMyWork from './seemywork';

//route links for project
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/whoiam" component={WhoIAm} />        
        <Route exact path="/seemywork" component={SeeMyWork} />
        <Route exact path="/reachout" component={Contact} />
    </Switch>
);
export default Main;