import React from 'react';
import { List, ListItem } from 'material-ui/List';

const Table = ({ data, pattern, isSearched }) =>
  <List>
    { data.filter(isSearched(pattern)).map(item => 
      <ListItem key={item.objectID}>
        {item.name}
      </ListItem>
    )}
  </List>

export default Table;