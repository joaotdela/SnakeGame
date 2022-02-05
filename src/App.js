import React, { Component } from 'react'
import './index.css';
import Snake from './Snake';


class App extends Component {
  state = {
    snakeDots: [
      [0, 0],
      [2, 0]
    ]
  }
  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots} />
      </div>
    );
  }
}

export default App;
