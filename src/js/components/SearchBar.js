import React from "react";
import { Link, browserHistory } from 'react-router';
import Styles from "../styles.cs";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      displayResults: props
    }
    this.handleChange = this.handleChange.bind(this);
  }

  static getInputValue () {
    return this.state.input;
  }

  getInputStyle() {
    const { displayResults } = this.state;
    if (displayResults) {
      return Styles.resultsInputStyle;
    } else {
      console.log(Styles.inputStyle);
      return Styles.inputStyle;
    }
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div class="input-group" style={this.getInputStyle()}>
        <input type="text" class="form-control "
          value={this.state.input}
          placeholder="Search artists..."
          aria-describedby="sizing-addon2"
          onChange={this.handleChange}>
        </input>
      </div>
    );
  }
}
