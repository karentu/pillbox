import React, { Component } from 'react';
import './App.css';
import List from './List';
import FilteredList from './FilteredList';
import Counter from './Counter';
import Apple from './apple.png';
import Meds from './medications.json';
/*
This list of produce that is passed into the FilteredList component.
Notice that it is a list of javascript objects where {key: value}.
*/

const meds = Meds;

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items={meds}/>
        <Counter name={'Counter'} />
      </div>

    );
  }
}
export default App;
