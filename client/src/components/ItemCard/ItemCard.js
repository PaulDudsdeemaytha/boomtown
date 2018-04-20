import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardTitle,
  CardMedia
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import Gravatar from "react-gravatar";
import moment from "moment";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  width: "380px",
  padding: "10px"
};

const ItemCard = props => {
  const item = props.itemsData;
  return (
    <div style={styles}>
      <Card>
        <CardMedia>
          <img src={item.imageurl} />
        </CardMedia>
        <Link to={`/profile/${item.itemowner.id}`}>
          <CardHeader
            title={item.itemowner.fullname}
            subtitle={moment(item.created)
              .startOf()
              .fromNow()}
            avatar={<Gravatar email={item.itemowner.email} />}
          />
        </Link>
        <CardTitle title={item.title} subtitle={item.tags[0]} />
        <CardText>{item.description}</CardText>
        <CardActions>
          <RaisedButton label="Borrow " secondary={true} />
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
