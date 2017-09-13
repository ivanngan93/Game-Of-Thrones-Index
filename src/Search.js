import React from 'react';
import TextField from 'material-ui/TextField';

const Search = ({ onChange }) =>
  <TextField
    hintText="Search by Name"
    fullWidth={true} 
    onChange={onChange} >
  </TextField>
export default Search;