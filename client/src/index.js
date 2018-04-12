import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import muiTheme from "./config/theme";

import Layout from "./components/Layout";
import Login from "./containers/Login";

//importing items
import Items from "./containers/Items";
//importing router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout>
      {/* Router */}
      <Router>
        <Switch>
          <Route path="/" component={Items} />
          <Route exact path="/Login" component={Login} />
          {/* <Route path="/*" component={Page404}/> */}
        </Switch>
      </Router>
      {/* End of Router */}
    </Layout>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
