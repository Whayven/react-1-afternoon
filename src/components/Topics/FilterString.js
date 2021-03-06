import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        "Wayne",
        "Tyshaun",
        "Tyler",
        "Andrew",
        "Annette",
        "Anthony",
        "Arnold",
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterStrings(str) {
    const arr = this.state.unFilteredArray;
    const filteredArr = arr.filter((el) => {
      return el.includes(str);
    });

    this.setState({ filteredArray: filteredArr });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterStrings(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
