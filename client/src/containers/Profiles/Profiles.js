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

//styles for paper
const styles = {
  height: 250,
  width: 800,
  margin: "auto",
  marginTop: 40,
  marginBottom: 40
};

const Profiles = props => {
  const item = this.props;
  return (
    <div>
      <Paper style={styles} zDepth={1}>
        <Card>
          {/* <CardHeader title={item.itemowner.fullname} subtitle={item.created} /> */}
        </Card>
      </Paper>
    </div>
  );
};

export default Profiles;
