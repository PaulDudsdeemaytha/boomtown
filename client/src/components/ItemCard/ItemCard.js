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

const styles = {
  width: "380px",
  padding: "10px"
};

const ItemCard = props => {
  const item = props.itemsData;
  return (
    <div style={styles}>
      <Card>
        <Link to={`/profile/${item.itemowner.id}`}>
          <CardHeader
            title={item.itemowner.fullname}
            subtitle={item.created}
            avatar={<Gravatar email={item.itemowner.email} />}
          />
        </Link>
        <CardMedia>
          <img src={item.imageurl} />
        </CardMedia>
        <CardTitle title={item.title} subtitle={item.tags[0]} />
        <CardText>{item.description}</CardText>
        <CardActions>
          <FlatButton label="Borrow" />
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
