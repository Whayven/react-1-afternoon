import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        {
          name: "Wayne",
          favColor: "Red",
          age: 23,
        },
        {
          name: "Hanna",
          age: 22,
          school: "CSU",
        },
        {
          name: "Chris",
          favColor: "Green",
        },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterObjects(key) {
    const arr = this.state.unFilteredArray;
    const filteredArr = arr.filter((obj) => {
      return key in obj;
    });

    this.setState({ filteredArray: filteredArr });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterObjects(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
