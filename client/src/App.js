import React, {Component} from 'react';
import { Provider } from "react-redux";
import "./App.css";

// import { StylesProvider } from "@material-ui/core/styles";

import { store as mainStore } from "./app/store.js";
import Structure from "./Structure";

// function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.store = mainStore;
  }
  render() {
    return (
      <div className="App">
        {/* <Provider store={this.store}> */}
        {/* <StylesProvider>
          <Provider store={this.store}> */}
            <Structure />
          {/* </Provider>
        </StylesProvider> */}
      </div>
    );
  }
}

export default App;
