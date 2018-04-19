import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardTitle,
  CardMedia
} from "material-ui/Card";

const Profiles = props => {
  const item = props.itemsData;
  return (
    <Paper zDepth={1}>
      <Card>{/* <CardText>{item.description}</CardText> */}</Card>
    </Paper>
  );
};

export default Profiles;
