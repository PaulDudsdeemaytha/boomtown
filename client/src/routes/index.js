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

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Items} />
        <Route path="/Login" component={Login} />
        {/* <Route path="/*" component={Page404}/> */}
      </Switch>
    </Router>
  );
};

export default Routes;
