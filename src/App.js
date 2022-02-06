import React, { Component } from 'react'
import './index.css';
import Snake from './Snake';
import Food, { getRandomCoordinates } from './Food';

const initialState = {
  food: getRandomCoordinates(),
  speed: 350,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [5, 0]
  ]
}

class App extends Component {
  state = {
    food: getRandomCoordinates(),
    speed: 350,
    direction: 'RIGHT',
    snakeDots: [
      [0, 0],
      [5, 0]
    ]
  }
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }
  componentDidUpdate() {
    this.checkIfOutBorders()
  }
  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: 'UP' });
        break;
      case 40:
        this.setState({ direction: 'DOWN' });
        break;
      case 37:
        this.setState({ direction: 'LEFT' });
        break;
      case 39:
        this.setState({ direction: 'RIGHT' });
        break;
    }
  }
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 5, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 5, head[1]];
        break;
      case 'UP':
        head = [head[0], head[1] - 5];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 5];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    })
  }
  checkIfOutBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.GameOver();
    }
  }
  checkCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.GameOver()
      }
    })
  }
  GameOver() {
    alert('You lose')
    this.setState(initialState)
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
