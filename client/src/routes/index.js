import React from "react";
//importing router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
//importing items
import Items from "../containers/Items";
import Login from "../containers/Login";
import Profiles from "../containers/Profiles";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Items} />
        <Route exact path="/profile/:itemownerId" component={Profiles} />
        <Route path="/Login" component={Login} />
        {/* <Route path="/*" component={Page404}/> */}
      </Switch>
    </Router>
  );
};

export default Routes;
