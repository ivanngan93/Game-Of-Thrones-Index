import React from 'react';

const Table = ({ data, pattern, isSearched }) =>
<div>
  { data.filter(isSearched(pattern)).map(item => 
    <div key={item.objectID}>{item.name}</div>
  )}
</div>

export default Table;