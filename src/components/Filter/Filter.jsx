import React from 'react';
import {FilterContainer,FilterText,FilterDesc, FilterInput} from './Filter.styled'
// import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterText>Contacts</FilterText>
      <FilterDesc>Find contacts by name</FilterDesc>
      <FilterInput
        type="name"
        value={value}
        onChange={onChange}
      />
    </FilterContainer>
  )
};


// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default Filter
