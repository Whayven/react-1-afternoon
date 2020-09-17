import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  handleInput1(num) {
    this.setState({ number1: parseInt(num) });
  }

  handleInput2(num) {
    this.setState({ number2: parseInt(num) });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleInput1(e.target.value)}
        />
        <input
          className="inputLine"
          onChange={(e) => this.handleInput2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.add(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
