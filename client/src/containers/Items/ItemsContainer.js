import React, { Component } from 'react';
import Items from './Items';
import PropTypes from 'prop-types';

// importing itemcard component
import ItemCard from '../../components/ItemCard';
import { connect } from 'react-redux';
import { fetchItemsAndUsers } from '../../redux/modules/items';
import LoadingWheel from '../../components/LoadingWheel';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const itemsQuery = gql`
    query {
        items {
            id
            title
            created
            imageurl
            description
            available
            tags
            itemowner {
                id
                email
                bio
                fullname
            }
            borrower {
                fullname
            }
        }
    }
`;

class ItemsContainer extends Component {
    render() {
        return (
            <Query query={itemsQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <LoadingWheel />;
                    if (error) return <p>Error Getting Items!</p>;
                    return <Items itemsData={data.items} />;
                }}
            </Query>
        );
    }
}

export default ItemsContainer;
// export default connect(state => ({
//     itemsData: state.itemsData
// }))(ItemsContainer);
// export default connect(state => ({
//     itemsData: state.itemsData
// }))(ItemsContainer);

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

// componentDidMount() {
//     this.props.dispatch(fetchItemsAndUsers());
//     console.log(this.props.itemsData.isLoading);
// }
// filterItems = itemsData => {
//     if (itemsData.itemFilters.length > 0) {
//         const filteredItems = itemsData.items.filter(item => item.tags.filter(tag =>
//             itemsData.itemFilters.find(filter => filter === tag)
//         ).length);
//         return filteredItems;
//     }
//     return itemsData.items;
// };
