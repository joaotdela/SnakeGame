import React, { Component } from 'react'
import './index.css';
import Snake from './Snake';
import Food, { getRandomCoordinates } from './Food';


class App extends Component {
  state = {
    food: getRandomCoordinates(),
    snakeDots: [
      [0, 0],
      [5, 0]
    ]
  }
  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} />
      </div>
    );
  }
}

export default App;
