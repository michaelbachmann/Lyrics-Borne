import React from "react";
import Styles from "../styles.css";
import { Link, browserHistory } from 'react-router';
import SongResult from "../components/SongResult";
import * as SongActions from "../actions/SongActions";
import SongListStore from "../stores/SongListStore";

// SongList Component that represents our SongList page. This page
// contains a list of all of the the songs that contain a certain
// word.
export default class SongList extends React.Component {
  constructor() {
    super();
    this.getSongData = this.getSongData.bind(this);
    this.state = {
      songData: SongListStore.getAllSongData(),
    };
  }
  // Adds listener on re-render
  componentWillMount() {
    SongListStore.on("change", this.getSongData);
  }
  // Removes listener on re-render
  componentWillUnmount() {
    SongListStore.removeListener("change", this.getSongData);
  }
  // Updates our components state variable by grabbing the stores
  // current version of our state
  getSongData() {
    this.setState({
      songData: SongListStore.getAllSongData(),
    });
  }
  // Pulls in song data from our servers rest API
  reloadSongData(songID) {
    SongActions.reloadSongData(songID);
  }
  // Render method that contains all of our html
  render() {
  	const { query } = this.props.location;
  	const { params } = this.props;
  	const word = query.word;
    const { songData, title } = this.state;
    const mappedSongData = songData.map((song, i) => <SongResult key={i} song={song.song} count={song.count} word={params.word} artist={song.artist}/> );

    return (
      <div>
        <h1 style={Styles.titleStyle}>{word}</h1>

        <table style={Styles.tableStyle}><tbody>{mappedSongData}</tbody></table>

        <Link to={`/`}>
      	<button class="btn btn-lg" style={Styles.searchButtonStyle}>
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
					</span>  Search
				</button>
        </Link>
      </div>
    );
  }
}
