import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import muiTheme from "./config/theme";

import Layout from "./components/Layout";
import Login from "./containers/Login";
//todo fix route
import Routes from "./routes";
//importing items
import Items from "./containers/Items";
//importing itemcard component
import ItemCard from "./components/ItemCard";

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout>
      <Routes />
    </Layout>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
