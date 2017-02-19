import React from "react";
import Styles from "../styles.css";
import { Link, browserHistory } from 'react-router';

import SongResults from "../components/SongResults";
import * as SongActions from "../actions/SongActions";
import SongListStore from "../stores/SongListStore";
import * as WordCloudActions from "../actions/WordCloudActions";

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
    const { songData, title } = this.state;
    const mappedSongData = songData.map((song, i) => <SongResults key={i} song={song.song} count={song.count} word={params.word}/> );

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
