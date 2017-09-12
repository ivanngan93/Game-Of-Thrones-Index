import React, { Component } from 'react';
import Search from './Search.js';
import Table from './Table.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const data = [
  {
    objectID: 0,
    name: "Daenerys Targaryen"
  },
  {
    objectID: 1,
    name: "Jon Snow"
  },
  {
    objectID: 2,
    name: "Cersei Lannister"
  },
  {
    objectID: 3,
    name: "Gregor Clegane"
  },
  { 
    objectID: 4,
    name: "Tyrion Lannister"
  },
  {
    objectID: 5,
    name: "Sansa Stark"
  },
  {
    objectID: 6,
    name: "Arya Stark"
  },
  { 
    objectID: 7,
    name: "Khal Drogo"
  },
  {
    objectID: 8,
    name: "Gendry"
  },
  {
    objectID: 9,
    name: "Joffrey Baratheon"
  }
]

const isSearched = searchTerm => item =>
  !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { data, searchTerm } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange} />
          <Table
            data={data}
            pattern={searchTerm}
            isSearched={isSearched} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
