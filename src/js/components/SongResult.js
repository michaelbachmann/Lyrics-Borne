import React from "react";
import { Link, browserHistory } from 'react-router';
import * as LyricsActions from "../actions/LyricsActions";
import ArtistsStore from "../stores/ArtistsStore";

// SongResult component creates a table row that has a Link
// to a lyrics page for that song and passes in the word as props
export default class SongResult extends React.Component {
  render() {
    const { artist, count, song, word } = this.props;
    const songStr = `${song}`;
    const urlStr = `/lyrics/${word}/${song}`;
    const savedArtists = ArtistsStore.getSavedArtistData();

    // Styling Objects
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
    console.log(songStr);
    return (
    		<tr style={rowStyle}>
        	<td style={songColumnStyle}>
                <Link to={urlStr} className="song-result" onClick={()=>LyricsActions.reloadLyricsData(songStr, artist)} originalword={word}>
                    {songStr}
                    </Link>
            </td>
        	<td className="song-result-count" style={countColumnStyle}>{count}</td>
        </tr>
    );
  }
}
