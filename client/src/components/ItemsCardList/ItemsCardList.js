import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemCard from "../ItemCard";
import Masonry from "react-masonry-component";
import "./styles.css";

const ItemsCardList = props => {
  return (
    <Masonry
      className={"my-gallery-class"}
      elementType={"ul"} // default 'div'
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
    >
      {props.itemsData.map((item, index) => (
        <li key={index}>
          <ItemCard itemsData={item} />
        </li>
      ))}
    </Masonry>
  );
};
export default ItemsCardList;
