import React, { Component } from 'react';
import { Counter } from './features/Counter';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>hElLo wOrLD! </h1>
        <Counter />
      </div>
    )
  }
}

export default App;
