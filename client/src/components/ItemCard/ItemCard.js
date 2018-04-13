import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardTitle
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";

const styles = {
  width: "350px"
};

const ItemCard = props => {
  const item = props.itemsData;
  return (
    <div>
      <Card style={styles}>
        <Link to={`/profile/${item.itemowner.id}`}>
          <CardHeader
            title={item.itemowner.fullname}
            subtitle={item.created}
            // avatar="images/jsa-128.jpg"
          />
        </Link>
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
