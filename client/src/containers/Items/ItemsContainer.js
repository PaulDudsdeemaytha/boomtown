import React, { Component } from 'react';
import Items from './Items';
// importing itemcard component
import ItemCard from '../../components/ItemCard';
import { connect } from 'react-redux';
import { fetchItemsAndUsers } from '../../redux/modules/items';

class ItemsContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchItemsAndUsers());
        console.log(this.props.itemsData.isLoading);
    }
    filterItems = itemsData => {
        if (itemsData.itemFilters.length > 0) {
            const filteredItems = itemsData.items.filter(item => item.tags.filter(tag =>
                itemsData.itemFilters.find(filter => filter === tag)
            ).length);
            return filteredItems;
        }
        return itemsData.items;
    };

    render() {
        return (
            <div>
                {/* todo, create loader file for below */}
                {this.props.itemsData.isLoading ? (
                    <p>Loading</p>
                ) : (
                    // <Loader />
                    <Items itemsData={this.filterItems(this.props.itemsData)} />
                )}
            </div>
        );
    }
}

export default connect(state => ({
    itemsData: state.itemsData
}))(ItemsContainer);

// constructor() {
//   super();
//   this.state = {
//     itsLoading: false,
//     itemsData: []
//   };
// }
// todo might want to rename objects and profile to something smarter
// todo move setState with .then to set after its do
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
