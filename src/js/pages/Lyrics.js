import React from "react";
import Styles from "../styles.css";
import Highlightable from 'highlightable';
import LyricsStore from '../stores/LyricsStore';
import LyricsActions from '../actions/LyricsActions';
var Highlight = require('react-highlighter');

export default class Lyrics extends React.Component {
  constructor() {
    super();
    this.state = {
      lyrics: LyricsStore.getAllLyricsData()
    }
  }

  componentWillMount() {
    LyricsStore.on("change", this.getLyricsData);
  }

  componentWillUnmount() {
    LyricsStore.removeListener("change", this.getLyricsData);
  }

  getLyricsData() {
    this.setState({
      songData: LyricsStore.getAllLyricsData(),
    });
  }

  reloadLyricsData() {
    LyricsActions.reloadLyricsData();
  }

  render() {
		const { query } = this.props.location.query;
  	const { params } = this.props;
    const { songID, word } = params;
    const { lyrics } = this.state;
    return (
      <div>
        <h1 style={Styles.titleStyle}>{songID}</h1>

        <pre style={Styles.lyricsStyle}>
          <Highlight search={word} matchStyle={{backgroundColor:"#ffd54f"}}>{lyrics}</Highlight>
        </pre>

        <button class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => {this.props.history.push('/')}}>
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
					</span>  Search
				</button>
        <button class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => {this.props.history.goBack()}}>
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
          </span>  Song List
        </button>
      </div>
    );
  }
}
