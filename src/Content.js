import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = {
  listTemplate: {
    padding: 0
  }
}

class Content extends Component {
  render() {
    return (
        <List style={styles.listTemplate}>
            <ListItem primaryText="Poop1"/>
            <Divider/>
            <ListItem primaryText="Poop2"/>
            <Divider/>
            <ListItem primaryText="Poop3"/>
            <Divider/>
            <ListItem primaryText="Poop4"/>
            <Divider/>
            <ListItem primaryText="Poop5"/>
            <Divider/>
            <ListItem primaryText="Poop6"/>
            <Divider/>
            <ListItem primaryText="Poop7"/>
            <Divider/>
            <ListItem primaryText="Poop8"/>
            <Divider/>
            <ListItem primaryText="Poop9"/>
            <Divider/>
            <ListItem primaryText="Poop10"/>
            <Divider/>
            <ListItem primaryText="Poop1"/>
            <Divider/>
            <ListItem primaryText="Poop2"/>
            <Divider/>
            <ListItem primaryText="Poop3"/>
            <Divider/>
            <ListItem primaryText="Poop4"/>
            <Divider/>
            <ListItem primaryText="Poop5"/>
            <Divider/>
            <ListItem primaryText="Poop6"/>
            <Divider/>
            <ListItem primaryText="Poop7"/>
            <Divider/>
            <ListItem primaryText="Poop8"/>
            <Divider/>
            <ListItem primaryText="Poop9"/>
            <Divider/>
            <ListItem primaryText="Poop10"/>
        </List>
    );
  }
}

export default Content;