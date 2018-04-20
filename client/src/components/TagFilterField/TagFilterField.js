import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { get_item_filters } from "../../redux/modules/items";

const TagFilterField = ({ tags, dispatch }) => {
  function handleFilter(value) {
    dispatch(get_item_filters(value));
  }
  return (
    <SelectField
      multiple
      hintText="Filter By Text"
      onChange={(event, index, value) => handleFilter(value[0])}
    >
      {tags &&
        tags.map((tag, index) => (
          <MenuItem key={index} value={tag} primaryText={tag} />
        ))}
    </SelectField>
  );
};

export default connect()(TagFilterField);
