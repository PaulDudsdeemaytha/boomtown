import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemCard from "../ItemCard";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0,
  columnWidth: 350,
  gutter: 20
};

const styles = {
  width: "100vh"
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "center"
  //   justifyContent: "space-between"
};

const ItemsCardList = props => {
  return (
    <Masonry
      className={"my-gallery-class"} // default ''
      elementType={"ul"} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      style={styles}
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      //   imagesLoadedOptions={imagesLoadedOptions} // default {}
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
