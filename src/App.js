import React, { Component } from "react";
import { Wizard } from "dibk-wizard-framework";

import cat from "./api/cat";

class App extends Component {
  render() {
    return <Wizard schema={cat} />;
  }
}

export default App;
