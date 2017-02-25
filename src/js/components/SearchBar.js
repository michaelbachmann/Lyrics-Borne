import React from "react";
import { Link, browserHistory } from 'react-router';
import Styles from "../styles.cs";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      input: '',
      displayResults: props
    }
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

  handleQueryChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div class="input-group" style={this.getInputStyle()}>
        <input type="text" class="form-control " placeholder="Search artists..." aria-describedby="sizing-addon2" onChange={this.handleQueryChange}></input>
      </div>
    );
  }
}
