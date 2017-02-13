import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {

	render() {
    const searchButtonStyle = {
    	backgroundColor: "#653CE0",
    	color: "white",
    	padding: "10px",
    	marginRight: "10px",
    	marginTop: "10px",
    	fontWeight: "bold",
    	width: "150px"
    };
    const shareButtonStyle = {
    	backgroundColor: "#377BB5",
    	color: "white",
    	padding: "10px",
    	marginRight: "10px",
    	marginTop: "10px",
    	fontWeight: "bold",
    	width: "150px"
    };
    const addButtonStyle = {
    	backgroundColor: "#5FB760",
    	color: "white",
    	padding: "10px",
    	fontWeight: "bold",
    	marginTop: "10px",
    	width: "150px"
    };
    const inputStyle = {
    	margin:"0 auto",
    	borderRadius: "50",
    	width: "470px"
    };
    const bodyStyle = {
    	textAlign: "center"
    };
		return (
      <div class="container" style={bodyStyle}>
				<div class="row">
					<div class="col-lg-12">
						<h1>Lyrical Word Clouds</h1>
					</div>
				</div>

				<div class="row">
					<div class="input-group" style={inputStyle}>
  					<input type="text" class="form-control " placeholder="Search artists..." aria-describedby="sizing-addon2"></input>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<button class="btn btn-lg" style={searchButtonStyle}>
							<span class="glyphicon glyphicon-search" aria-hidden="true">
							</span>  Search
						</button>
						<button class="btn btn-lg" style={shareButtonStyle}>
							<span class="glyphicon glyphicon-share" aria-hidden="true">
							</span>  Share</button>
						<button class="btn btn-lg" style={addButtonStyle}>
							<span class="glyphicon glyphicon-plus" aria-hidden="true">
							</span>  Add</button>
					</div>
				</div>

			</div>
		);
	}
}