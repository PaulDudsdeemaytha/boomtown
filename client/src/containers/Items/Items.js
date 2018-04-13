import React, { Component } from "react";
import ItemsCardList from "../../components/ItemsCardList";

const Items = props => {
  return (
    <div>
      <ItemsCardList itemsData={props.itemsData} />
    </div>
  );
};

export default Items;
