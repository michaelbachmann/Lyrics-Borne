import React from "react";
import Styles from "../styles.css"
import { Link } from "react-router";

export default class Layout extends React.Component {
	render() {
		return (
      <div class="container" style={Styles.bodyStyle}>
				<div class="row">
					<div class="col-lg-12">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}