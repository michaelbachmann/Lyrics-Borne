import React from "react";
import Styles from "../styles.css";
import { TagCloud } from "react-tagcloud";
import * as WordCloudActions from "../actions/WordCloudActions";
import * as SongActions from "../actions/SongActions";
import WordCloudStore from "../stores/WordCloudStore";
import ArtistsStore from "../stores/ArtistsStore";
import ArtistResult from "../components/ArtistResult";
import { Link, browserHistory } from 'react-router';
import RandomColor from 'randomcolor';
import style from "../../styles.css";
import Popup from 'react-popup';
var html2canvas = require("html2canvas");

export default class WordCloud extends React.Component {
  constructor() {
  	super();
  	this.getData = this.getData.bind(this);
  	this.state = {
  		wordData: WordCloudStore.getAllWordData(),
      artistData: WordCloudStore.getAllArtistData(),
      isGrayscale: false,
      colorOpts: {
        luminosity: 'dark',
        format: 'rgba',
        alpha: 0.5,
      },
      displayResults: true,
      inputData: WordCloudStore.getAllInputData(),
    };

    this.updateColor = this.updateColor.bind(this);
  }
  // Adds listener on re-render
  componentWillMount() {
  	WordCloudStore.on("change", this.getData);
  }
  // Removes listener on re-render
  componentWillUnmount() {
  	WordCloudStore.removeListener("change", this.getData);
  }
  // Updates our components state variables by grabbing the stores
  // current version of our state
  getData() {
  	this.setState({
  		wordData: WordCloudStore.getAllWordData(),
      artistData: WordCloudStore.getAllArtistData(),
      inputData: WordCloudStore.getAllInputData(),
  	});
  }
  // Returns a specific style depending on the current state
  getTableStyle() {
    const { displayResults } = this.state;
    if (displayResults) {
      return Styles.resultsTableStyle;
    } else {
      return Styles.noResultsTableStyle;
    }
  }
  // Returns a specific style depending on the current state
  getInputStyle() {
    const { displayResults } = this.state;
    if (displayResults) {
      return Styles.resultsInputStyle;
    } else {
      return Styles.inputStyle;
    }
  }

  closePopUp() {
    var object = this.refs.myModal;
    object.style.display = "none";
  }
  // Clear word cloud store
  clearWordCloudStore() {
    WordCloudActions.clearWordCloudStore();
  }
  // Calls our rest API to get word cloud data
  reloadWordCloud() {
    WordCloudActions.reloadWordCloud();

  }
  // Calls our rest API to get artist data
  queryArtists(query) {
    WordCloudActions.storeArtist(query);
    WordCloudActions.reloadArtistData(query);
  }
  // Stores received artist in store
  storeArtist(query) {
    console.log(query);
    WordCloudActions.storeArtist(query);
  }
  // Keeps input updated
  updateInputData(event) {
    WordCloudActions.reloadInputData(event.target.value);
  }

  // Checks value of checkbox and rerenders word cloud in grayscale or color
  updateColor(event) {
     const target = event.target;
     const isGrayscale = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;
     if (isGrayscale === false) {
       this.setState({
         isGrayscale: false,
         colorOpts: {
           luminosity: 'dark',
           format: 'rgba',
           alpha: 0.5
         }
       });
     } else {
       this.setState({
         luminosity: 'light',
         isGrayscale: true,
         colorOpts: { hue: 'monochrome' }
       });
     }
   }
  // Render method that contains all of our html
  render() {
    const { inputData, displayResults, artistData, wordData, isColor, colorOpts } = this.state;
    const mappedArtistData = artistData.map((artist, i) => <ArtistResult key={i} mName={artist.mName} mImageURL={artist.mImageURL} mID={artist.mID}/> );
    return (
			<div>

      <div id="myModal" className="modal" ref="myModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" id="closeModal" ref="closeModal" onClick={()=>this.closePopUp()}>×</span>
            <h3 style={Styles.errorStyle}>Error: No artists with this name found.</h3>
          </div>
        </div>
      </div>

        <div className="word-cloud" id="currentCloud" ref="currentCloud">
        <TagCloud minSize={8}
            maxSize={90}
            tags={wordData}
            colorOptions={colorOpts}
            onClick={
              (tag) => {
                SongActions.reloadSongData(tag.value);
                this.props.history.push({
                  pathname: `/songlist/${tag.value}`,
                  search: `?word=${tag.value}`,
                });
              }
            }
        />
        </div>

        <form>
        <label id="grayscale-label">
          Grayscale:
          <input
            name="isGrayscale"
            type="checkbox"
            id="grayscale-checkbox"
            defaultChecked={isColor}
            checked={this.state.isGrayscale}
            onChange={this.updateColor} />
        </label>
        </form>

        <div class="input-group" style={this.getInputStyle()}>
          <input id="search-input-box" type="text" class="form-control "
            value={this.state.inputData}
            placeholder="Search artists..."
            aria-describedby="sizing-addon2"
            onChange={this.updateInputData}>
          </input>
        </div>

        <table id="artist-result-table" style={Styles.resultsTableStyle}><tbody>{mappedArtistData}</tbody></table>

				<button id="search-button" class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => this.queryArtists(inputData)}>
					<span class="glyphicon glyphicon-search" aria-hidden="true">
					</span>  Search
				</button>

        <a target="_blank" href="https://www.facebook.com/dialog/feed?app_id=184683071273&link=localhost%3A8888&picture=http%3A%2F%2Fwww.insert-image-share-url-here.jpg&name=Lyrical%20word%20clouds!&caption=%20&description=This%20is%20a%20Facebook%20description.&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F" >
        <button id="share-button" class="btn btn-lg" style={Styles.shareButtonStyle}>
				 <span class="glyphicon glyphicon-share" aria-hidden="true">
				 </span>  Share
        </button>
        </a>

				<button id="add-button" class="btn btn-lg" style={Styles.addButtonStyle} onClick={() => this.reloadWordCloud(inputData)}>
					<span class="glyphicon glyphicon-plus" aria-hidden="true">
					</span>  Add</button>
			</div>
    );
  }
}
