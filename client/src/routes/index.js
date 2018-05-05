import React from 'react';
// importing router
import { Route, Switch, Link, Redirect } from 'react-router-dom';
// importing items
import Items from '../containers/Items';
import Login from '../containers/Login';
import Profiles from '../containers/Profiles';
import NotFound from '../containers/NotFound';
import Share from '../containers/Share';

const Routes = () => (
    <Switch>
        <Route path="/share" component={Share} />
        <Route exact path="/" component={Items} />
        <Route exact path="/profile/:itemownerId" component={Profiles} />
        <Route path="/Login" component={Login} />
        <Route path="/*" component={NotFound} />
    </Switch>
);

export default Routes;
