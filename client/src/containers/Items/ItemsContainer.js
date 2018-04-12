import React, { Component } from "react";
import Items from "./Items";

class ItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      itsLoading: false,
      itemsData: []
    };
  }
  //todo might want to rename objects and profile to something smarter
  //todo move setState with .then to set after its do
  componentDidMount() {
    const urls = ["http://localhost:3000/items", "http://localhost:3000/users"];
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      objects => {
        console.log(objects);
        objects[0].map(item => {
          objects[1].map(profile => {
            if (profile.id === item.itemowner) {
              item.itemowner = profile;
            }
          });
        });
        this.setState({ itemsData: objects[0] });
        console.log(this.state.itemsData);
      }
    );
  }

  render() {
    return (
      <div>
        <Items />
      </div>
    );
  }
}

export default ItemsContainer;
