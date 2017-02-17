import React from "react";

export default class SongResults extends React.Component {
  render() {
    const { count, song } = this.props;
    const songStr = ` ${song}`;

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
        	<td style={songColumnStyle}>{songStr}</td>
        	<td style={countColumnStyle}>{count}</td>
        </tr>
    );
  }
}
