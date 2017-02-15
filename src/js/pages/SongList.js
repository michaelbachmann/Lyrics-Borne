import React from "react";
import Styles from "../styles.css"

export default class SongList extends React.Component {
  render() {
  	const { query } = this.props.location;
  	const { params } = this.props;
  	const word = query.word;
    return (
      <div>
        <h1 style={Styles.titleStyle}>SongList</h1>
      	<p>{word}</p>
      </div>
    );
  }
}
