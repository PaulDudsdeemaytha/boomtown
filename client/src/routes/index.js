import React from "react";
//importing router
import { Route, Switch, Link, Redirect } from "react-router-dom";
//importing items
import Items from "../containers/Items";
import Login from "../containers/Login";
import Profiles from "../containers/Profiles";
import NotFound from "../containers/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Items} />
      <Route exact path="/profile/:itemownerId" component={Profiles} />
      <Route path="/Login" component={Login} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
