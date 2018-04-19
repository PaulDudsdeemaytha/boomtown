import React, { Component } from "react";
import Items from "./Items";
//importing itemcard component
import ItemCard from "../../components/ItemCard";
import { connect } from "react-redux";
import { fetchItemsAndUsers } from "../../redux/modules/items";

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
  // componentDidMount() {
  //   const urls = ["http://localhost:3000/items", "http://localhost:3000/users"];
  //   Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
  //     array => {
  //       console.log(array);
  //       array[0].map(item => {
  //         array[1].map(profile => {
  //           if (profile.id === item.itemowner) {
  //             item.itemowner = profile;
  //           }
  //         });
  //       });
  //       this.setState({ itemsData: array[0] });
  //       console.log(this.props.itemsData);
  //     }
  //   );
  // }

  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }

  render() {
    return (
      <div>
        <Items itemsData={this.state.itemsData} />
      </div>
    );
  }
}

export default connect(state => {
  return {
    // isLoading: state.items.isLoading,
    // itemsData: state.items.itemsData,
    // itemFilters: state.items.itemFilters
    itemsData: state.items.items
  };
})(ItemsContainer);
