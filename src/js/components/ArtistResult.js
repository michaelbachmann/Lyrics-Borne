import React from "react";
import { Link, browserHistory } from 'react-router';
import * as WordCloudActions from "../actions/WordCloudActions";
import WordCloudStore from "../stores/WordCloudStore";

// Artist Result Component, Creates a table row element with two different
// columns and is styled, the first is the Artist name and provides a link to
// set the search bar to that artists name, the second is the image of that
// artist
export default class ArtistResult extends React.Component {
  render() {
    const { artist, imgURL } = this.props;
    // Styling objects
    const rowStyle = {
    	paddingLeft: "3px"
    };
    const songColumnStyle = {
    	width: "430px",
    	borderBottom:"2px solid #653CE0",
    	textAlign: "left",
    	padding: "5px"
    };
    const countColumnStyle = {
    	width: "40px",
    	borderBottom:"2px solid #653CE0",
    	padding: "5px"
    };
    const imgDimension = 40;
    return (
    		<tr style={rowStyle}>
        	<td style={songColumnStyle}><a onClick={()=>WordCloudActions.artistClicked(artist)}>{artist}</a></td>
          <td style={countColumnStyle}><img src={imgURL} height="30" width="26"/></td>
        </tr>
    );
  }
}
