import React from 'react';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';

const Search = ({ onChange }) =>
  <GridList
    cols={30}
    cellHeight="auto" >
    <GridTile cols={1} />
    <GridTile cols={28}>
      <TextField
        hintText="Type something bitch"
        fullWidth={true} 
        onChange={onChange} >
      </TextField>
    </GridTile>
    <GridTile cols={1} />
  </GridList>

export default Search;