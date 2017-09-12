import React from 'react';

const Search = ({ value, onChange }) =>
<form>
  <input
    type="text"
    value={value}
    onChange={onChange}/>
</form>

export default Search;