import React from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Logo from "../../images/boomtown-logo.svg";
import { Link } from "react-router-dom";

const HeaderBar = props => {
  return (
    <AppBar
      iconElementLeft={<img src={Logo} style={{ height: "40px" }} />}
      style={{ backgroundColor: "white" }}
    >
      <div>
        <RaisedButton label="My Profile" primary={true} />
        <RaisedButton label="Logout" secondary={true} />
      </div>
    </AppBar>
  );
};

export default HeaderBar;
