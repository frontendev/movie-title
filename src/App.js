import React, { Component } from 'react';
import Sidebar from '../src/components/sidebar';

import '../src/styles/app.sass';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <div className="grid-test">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default App;
