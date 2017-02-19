import React from "react";
import { Link, browserHistory } from 'react-router';

export default class SongResults extends React.Component {
  render() {
    const { count, song, word } = this.props;
    const songStr = ` ${song}`;
    const urlStr = `/lyrics/${word}/${song}`;

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
    }; // 607 672 32CL

    return (
    		<tr style={rowStyle}>
        	<td style={songColumnStyle}>
                <Link to={urlStr} originalword={word}>
                    {songStr}
                    </Link>
            </td>
        	<td style={countColumnStyle}>{count}</td>
        </tr>
    );
  }
}
