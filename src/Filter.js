import React from 'react';

const Filter = ({ value, onChange }) => {  
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input        
        type="text"
        placeholder="Search contact"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Filter;