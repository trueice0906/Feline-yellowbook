

import React,{ Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      kittens :[],
      searchField : '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({kittens : users }))
  }

  handleChange = e => {
    this.setState({ searchField : e.target.value })
  }

  render() {

    const { kittens,searchField } = this.state;
    const filteredKitten = kittens.filter(kitty => 
      kitty.name.toLowerCase().includes(searchField)
      )

    return(

      <div className="App">

        <h1 className="title">Feline Yellow Book</h1>
        <SearchBox 
          placeholder="search for kitty..." 
          handleChange = {this.handleChange} />

        <CardList kittenUsers={filteredKitten} />
         
      </div> 


    ) 
  }


}

export default App;