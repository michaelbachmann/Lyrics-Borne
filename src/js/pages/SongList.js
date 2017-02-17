import React from "react";
import Styles from "../styles.css"

import SongResults from "../components/SongResults";

export default class SongList extends React.Component {
  render() {
  	const { query } = this.props.location;
  	const { params } = this.props;
  	const word = query.word;

    const SongData = [
      { song: "Song 4", count: 4 }, { song: "Song 3", count: 3 },
      { song: "Song 2", count: 2 }, { song: "Song 1", count: 1 }, 
    ].map((song, i) => <SongResults key={i} song={song.song} count={song.count}/> );


    return (
      <div>
        <h1 style={Styles.titleStyle}>{word}</h1>

        <table style={Styles.tableStyle}>{SongData}</table>
        


      	<button class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => {this.props.history.push('/')}}>
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
					</span>  Search
				</button>
      </div>
    );
  }
}
