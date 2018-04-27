import React, { Component } from 'react';
import ItemsCardList from '../../components/ItemsCardList';
import PropTypes from 'prop-types';

const Items = props => (
    <div>
        <ItemsCardList itemsData={props.itemsData} />
    </div>
);

export default Items;

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};
