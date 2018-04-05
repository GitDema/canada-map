import React, { Component } from 'react';
import { connect } from 'react-redux';
import FromInput from './FromInput';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FromInput />
      </div>
    );
  }
}

export default App;
