import React, { Component } from 'react';
import './App.css';

import { store as mainStore } from './Data/store.js';
import Structure from './Structure';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = mainStore;
  }
  render() {
    return (
      <div className="App">
        <Structure />
      </div>
    );
  }
}

export default App;
