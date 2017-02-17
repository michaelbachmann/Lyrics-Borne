import React from "react";
import Styles from "../styles.css";
import { Link, browserHistory } from 'react-router';

import SongResults from "../components/SongResults";
import * as SongActions from "../actions/SongActions";
import SongListStore from "../stores/SongListStore";

export default class SongList extends React.Component {
  constructor() {
    super();
    this.getSongData = this.getSongData.bind(this);
    this.state = {
      songData: SongListStore.getAllSongData(),
    };
  }

  componentWillMount() {
    SongListStore.on("change", this.getSongData);

  }

  componentWillUnmount() {
    SongListStore.removeListener("change", this.getSongData);
  }

  getSongData() {
    this.setState({
      songData: SongListStore.getAllSongData(),

    });
  }

  reloadSongData() {
    SongActions.reloadSongData();
  }

  render() {
  	const { query } = this.props.location;
  	const { params } = this.props;
  	const word = query.word;
    const { songData } = this.state;
    const mappedSongData = songData.map((song, i) => <SongResults key={i} song={song.song} count={song.count}/> );

    return (
      <div>
        <h1 style={Styles.titleStyle}>{word}</h1>
        <table style={Styles.tableStyle}>{mappedSongData}</table>

      	<button class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => {this.props.history.push('/')}}>
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
					</span>  Search
				</button>
      </div>
    );
  }
}
