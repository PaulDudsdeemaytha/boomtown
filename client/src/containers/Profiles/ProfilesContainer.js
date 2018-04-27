import React, { Component } from 'react';
import Profiles from './Profiles';
import LoadingWheel from '../../components/LoadingWheel';
import PropTypes from 'prop-types';
import ItemsCardList from '../../components/ItemsCardList';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const userUrl = 'http://localhost:3003/users';
const itemsUrl = 'http://localhost:3003/items';

const profileQuery = gql`
    query user($userId: ID!) {
        user(id: $userId) {
            id
            email
            fullname
            bio
            owneditems {
                title
                description
                imageurl
                tags
                created
                available
                tags
                itemowner {
                    id
                    fullname
                    email
                }
            }
            borroweditems {
                title
                description
                imageurl
                tags
                created
                available
            }
        }
    }
`;

class ProfilesContainer extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {
    //         itsLoading: false,
    //         itemsData: []
    //     };
    // }

    // componentDidMount() {
    //     const urls = [
    //         'http://localhost:3003/items',
    //         'http://localhost:3003/users'
    //     ];
    //     this.setState({ isLoading: true });

    //     Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    //         .then(array => {
    //             array[0].map((item, index) => {
    //                 array[1].map((profile, index) => {
    //                     if (profile.id === item.itemowner) {
    //                         item.itemowner = profile;
    //                     }
    //                 });
    //             });
    //             const newArray = array[0].filter(
    //                 item =>
    //                     this.props.match.params.itemownerId ===
    //                     item.itemowner.id
    //             );
    //             this.setState({ itemsData: newArray });
    //             console.log(this.state.itemsData);
    //         })
    //         .then(() => this.setState({ isLoading: false }))
    //         .catch(error => console.log(error));
    // }

    render() {
        const userId = this.props.match.params.itemownerId;
        return (
            <Query query={profileQuery} variables={{ userId }}>
                {({ loading, error, data }) => {
                    console.log(data);
                    if (loading) return <LoadingWheel />;
                    if (error) return <p>Error!</p>;
                    return (
                        <div>
                            <Profiles
                                profileInfo={this.props.location.state}
                                itemInfo={data.user.owneditems}
                            />
                            <ItemsCardList itemsData={data.user.owneditems} />
                        </div>
                    );
                }}
            </Query>
            // <div>
            //     <Profiles itemsData={this.state.itemsData} />
            //     <ItemsCardList itemsData={this.state.itemsData} />
            // </div>
        );
    }
}

export default ProfilesContainer;
