import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';

class Header extends Component {
  render() {
    return (
        <div>
        <AppBar title="Ivan's Ghetto Recipe Book"
                showMenuIconButton={false} />
        <GridList   cols={30}
                    cellHeight="auto">
            <GridTile cols={1}/>
            <GridTile cols={28}>
            <TextField  hintText="Type something bitch"
                        fullWidth={true}/>
            </GridTile>
            <GridTile cols={1}/>
        </GridList>
        </div>
    );
  }
}

export default Header;