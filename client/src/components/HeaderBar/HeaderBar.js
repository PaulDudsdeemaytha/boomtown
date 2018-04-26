import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Logo from '../../images/boomtown-logo.svg';
import { Link } from 'react-router-dom';
import TagFilterField from '../TagFilterField';
import { get_fetch_items, get_itemFilters } from '../../redux/modules/items';
import { connect } from 'react-redux';

// todo console log everything
class HeaderBar extends Component {
    componentDidMount() {
        const urls = [
            'http://localhost:3003/items',
            'http://localhost:3003/users'
        ];
        this.props.dispatch(get_fetch_items(urls));
    }
    getTags = items => {
        const tags = [];
        if (items.length && items[0] !== undefined) {
            items.map(item => {
                if (item.tags !== undefined) {
                    if (!item.tags.includes(undefined)) {
                        item.tags.map(tag => {
                            if (!tags.includes(tag)) {
                                tags.push(tag);
                            }
                        });
                    }
                }
            });
        }
        return tags;
    };
    render() {
        const tags = this.getTags(this.props.itemsData.items);
        console.log(tags);

        return (
            <AppBar
                iconElementLeft={<img src={Logo} style={{ height: '40px' }} />}
                style={{ backgroundColor: 'white' }}
            >
                <div>
                    {tags.length && <TagFilterField tags={tags} />}
                    <RaisedButton label="My Profile" primary />
                    <RaisedButton label="Logout" secondary />
                </div>
            </AppBar>
        );
    }
}
const mapStateToProps = state => ({
    itemsData: state.itemsData
});

export default connect(mapStateToProps)(HeaderBar);
