import React, { Component } from "react";
import { Provider } from 'react-redux';

import { Wizard } from "dibk-wizard-framework";

import cat from "./api/cat";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wizard schema={cat} />
      </Provider>
    )
  }
}

export default App;
