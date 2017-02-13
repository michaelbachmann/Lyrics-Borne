import React from "react";
import Styles from "../styles.css"

export default class WordCloud extends React.Component {
  render() {
    return (
			<div>
				<h1 style={Styles.titleStyle}>Lyrical Word Clouds</h1>
				<div class="input-group" style={Styles.inputStyle}>
					<input type="text" class="form-control " placeholder="Search artists..." aria-describedby="sizing-addon2"></input>
				</div>
				<button class="btn btn-lg" style={Styles.searchButtonStyle}>
					<span class="glyphicon glyphicon-search" aria-hidden="true">
					</span>  Search
				</button>
				<button class="btn btn-lg" style={Styles.shareButtonStyle}>
					<span class="glyphicon glyphicon-share" aria-hidden="true">
					</span>  Share</button>
				<button class="btn btn-lg" style={Styles.addButtonStyle}>
					<span class="glyphicon glyphicon-plus" aria-hidden="true">
					</span>  Add</button>
			</div>
    );
  }
}
