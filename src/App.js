import React, { Component } from 'react';
import Cart from './components/Cart';
import Shelf from './components/Shelf';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shelf />
        <Cart />
      </div>
    );
  }
}

export default App;
