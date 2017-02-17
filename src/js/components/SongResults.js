import React from "react";

export default class SongResults extends React.Component {
  render() {
    const { count, song } = this.props;
    const str = `${count} - ${song}`;
    return (
    		<tr>
        	<td>{str}</td>
        </tr>
    );
  }
}
