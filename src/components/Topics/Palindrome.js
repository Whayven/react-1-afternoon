import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  checkPalindrome(str) {
    let palindrome = "";
    let reversed = str.split("").reverse().join("");

    palindrome = reversed === str ? "true" : "false";

    this.setState({ palindrome });
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.checkPalindrome(this.state.userInput)}
        >
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
      </div>
    );
  }
}
