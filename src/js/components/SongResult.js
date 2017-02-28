import React from "react";
import { Link, browserHistory } from 'react-router';
import * as LyricsActions from "../actions/LyricsActions";

// SongResult component creates a table row that has a Link
// to a lyrics page for that song and passes in the word as props
export default class SongResult extends React.Component {
  render() {
    const { count, song, word } = this.props;
    const songStr = ` ${song}`;
    const urlStr = `/lyrics/${word}/${song}`;

    // Styling Objects
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
    return (
    		<tr style={rowStyle}>
        	<td style={songColumnStyle}>
                <Link to={urlStr} onClick={LyricsActions.reloadLyricsData(songStr)} originalword={word}>
                    {songStr}
                    </Link>
            </td>
        	<td style={countColumnStyle}>{count}</td>
        </tr>
    );
  }
}
