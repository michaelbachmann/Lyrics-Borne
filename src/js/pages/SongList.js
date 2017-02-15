import React from "react";
import Styles from "../styles.css"

export default class SongList extends React.Component {
  render() {
  	const { query } = this.props.location;
  	const { params } = this.props;
  	const word = query.word;
    return (
      <div>
        <h1 style={Styles.titleStyle}>{word}</h1>

      	<table class="table" style={Styles.tableStyle}>
      		<tbody>
      		<tr><td style={Styles.tableStyle}>One</td></tr>
      		<tr><td style={Styles.tableStyle}>One</td></tr>
      		<tr><td style={Styles.tableStyle}>One</td></tr>
      		<tr><td style={Styles.tableStyle}>One</td></tr>
      		<tr><td style={Styles.tableStyle}>One</td></tr>
      		<tr><td style={Styles.tableStyle}>One</td></tr>
      		</tbody>
      	</table>

      	<button class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => {this.props.history.push('/')}}>
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
					</span>  Search
				</button>
      </div>
    );
  }
}
