import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

class Header extends Component {
  render() {
    return (
        <Paper  zDepth={2}>
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
        </Paper>
    );
  }
}

export default Header;