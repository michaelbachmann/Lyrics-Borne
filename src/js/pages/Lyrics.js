import React from "react";
import Styles from "../styles.css";
import Highlightable from 'highlightable';
import LyricsStore from '../stores/LyricsStore';
import LyricsActions from '../actions/LyricsActions';
var Highlight = require('react-highlighter');

// Lyrics page component. Renders the lyrics in a pre-formatted
// html element. Also highlights all of a certain word.
export default class Lyrics extends React.Component {
  constructor() {
    super();
    this.getLyricsData = this.getLyricsData.bind(this);
    this.state = {
      lyrics: LyricsStore.getAllLyricsData(),
    }
  }
  // Adds listener on re-render
  componentWillMount() {
    LyricsStore.on("change", this.getLyricsData);
  }
  // Removes listener on re-render
  componentWillUnmount() {
    LyricsStore.removeListener("change", this.getLyricsData);
  }
  // Updates our components state variable by grabbing the stores
  // current version of our state
  getLyricsData() {
    this.setState({
      lyrics: LyricsStore.getAllLyricsData(),
    });
  }
  // Pulls in lyrics from our servers rest API
  // reloadLyricsData(songID, artist) {
  //   LyricsActions.reloadLyricsData(songID, artist);
  // }
  // Render method that contains all of our html
  render() {
		const { query } = this.props.location.query;
  	const { params } = this.props;
    const { songID, word } = params;
    const { lyrics } = this.state;
    return (
      <div>

        <h1 id="lyrics-title" style={Styles.titleStyle}>{songID}</h1>

        <pre id="lyrics-data" style={Styles.lyricsStyle}>
          <Highlight search={word} matchStyle={{backgroundColor:"#ffd54f"}}>{lyrics}</Highlight>
        </pre>

        <button id="lyrics-return-to-search" class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => {this.props.history.push('/')}}>
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
					</span>  Search
				</button>

        <button id="lyrics-return-to-songs" class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => {this.props.history.goBack()}}>
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
          </span>  Song List
        </button>

      </div>
    );
  }
}
