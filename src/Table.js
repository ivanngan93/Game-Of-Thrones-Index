import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
// import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const Table = ({ data, pattern, isSearched }) =>
  <List>
    { data.filter(isSearched(pattern)).map(item => 
      <ListItem 
        key={item.objectID}
        primaryText={item.name} 
        disabled={true}
        leftAvatar={
          <Avatar src={item.imageURL} />
        } > 
      </ListItem>
    )}
  </List>

export default Table;