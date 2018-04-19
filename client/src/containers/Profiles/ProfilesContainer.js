import React, { Component } from "react";
import Profiles from "./Profiles";
import PropTypes from "prop-types";

// import ItemCard from "../../components/ItemsCardList";
const userUrl = "http://localhost:3000/users";
const itemsUrl = "http://localhost:3000/items";
class ProfilesContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      itsLoading: false,
      itemsData: []
    };
  }

  componentDidMount() {
    const urls = ["http://localhost:3000/items", "http://localhost:3000/users"];
    this.setState({ isLoading: true });

    Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
      .then(array => {
        array[0].map((item, index) => {
          array[1].map((profile, index) => {
            if (profile.id === item.itemowner) {
              item.itemowner = profile;
            }
          });
        });
        console.log(array[0]);
        let newArray = array[0].filter(
          item => this.props.match.params.itemownerId === item.itemowner.id
        );
        this.setState({ itemsData: newArray });
        console.log(this.state.itemsData);
        console.log(this.props.match.params.itemownerId);
      })
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.log(error));
  }

  render() {
    return <Profiles />;
  }
}

export default ProfilesContainer;
