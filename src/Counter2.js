// Counter.js

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, errorOccurred: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Increment counter
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));

    // Simulate an error when counter reaches 8
    if (this.state.counter === 7) {
        this.setState({ errorOccurred: true });
      }
  }

  render() {
    if (this.state.errorOccurred) {
        return <h1>Counter reached 8!</h1>;
      }
    return (

      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment Counter</button>
      </div>
    );
  }
}

export default Counter;
