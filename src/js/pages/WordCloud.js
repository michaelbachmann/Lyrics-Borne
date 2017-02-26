import React from "react";
import Styles from "../styles.cs"
import { TagCloud } from "react-tagcloud";
import * as WordCloudActions from "../actions/WordCloudActions";
import WordCloudStore from "../stores/WordCloudStore";
import ArtistsStore from "../stores/ArtistsStore";
import ArtistResult from "../components/ArtistResult";
import { Link, browserHistory } from 'react-router';
import RandomColor from 'randomcolor';
import Autosuggest from 'react-autosuggest';
import SearchBar from '../components/SearchBar';


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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
  	WordCloudStore.on("change", this.getData, this.getArtistData);
    //ArtistsStore.on("change", this.getArtistData);
  }

  componentWillUnmount() {
  	WordCloudStore.removeListener("change", this.getData, this.getArtistData);
    //ArtistsStore.removeListener("change", this.getArtistData);
  }

  getData() {
  	this.setState({
  		wordData: WordCloudStore.getAllWordData(),
      artistData: WordCloudStore.getAllArtistData(),
      inputData: WordCloudStore.getAllInputData(),
  	});
  }

  getTableStyle() {
    const { displayResults } = this.state;
    if (displayResults) {
      return Styles.resultsTableStyle;
    } else {
      return Styles.noResultsTableStyle;
    }
  }

  getInputStyle() {
    const { displayResults } = this.state;
    if (displayResults) {
      return Styles.resultsInputStyle;
    } else {
      console.log(Styles.inputStyle);
      return Styles.inputStyle;
    }
  }


  // Not Used
  reloadWordCloud() {
    WordCloudActions.reloadWordCloud();
  }
  queryArtists(query) {
    WordCloudActions.reloadArtistData(query);
  }
  updateInputData(event) {
    WordCloudActions.reloadInputData(event.target.value);
  }
  // handleQueryChange(e) {
  //   this.setState({
  //     input: e.target.value
  //   });
  // }


  handleInputChange(event) {
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


  //  <div class="input-group" style={this.getInputStyle()}>
    //  <input type="text" class="form-control " placeholder="Search artists..." aria-describedby="sizing-addon2" onChange={this.handleQueryChange}></input>
  //  </div>
  render() {
    const { inputData, displayResults, artistData, wordData, isColor, colorOpts } = this.state;
    const mappedArtistData = artistData.map((artist, i) => <ArtistResult key={i} artist={artist.artist} imgURL={artist.imgURL}/> );
    return (
			<div>
				<h1 style={Styles.titleStyle}>Lyrical Word Clouds</h1>

        <TagCloud minSize={5}
            maxSize={35}
            tags={wordData}
            colorOptions={colorOpts}
            onClick={
              (tag) => {
                this.props.history.push({
                  pathname: `/songlist/${tag.value}`,
                  search: `?word=${tag.value}`,
                });
              }
            }
        />

        <form>
        <label>
          Grayscale:
          <input
            name="isGrayscale"
            type="checkbox"
            defaultChecked={isColor}
            checked={this.state.isGrayscale}
            onChange={this.handleInputChange} />
        </label>
        </form>

        <div class="input-group" style={this.getInputStyle()}>
          <input type="text" class="form-control "
            value={this.state.inputData}
            placeholder="Search artists..."
            aria-describedby="sizing-addon2"
            onChange={this.updateInputData}>
          </input>
        </div>

        <table style={Styles.resultsTableStyle}><tbody>{mappedArtistData}</tbody></table>

				<button class="btn btn-lg" style={Styles.searchButtonStyle} onClick={() => this.queryArtists(inputData)}>
					<span class="glyphicon glyphicon-search" aria-hidden="true">
					</span>  Search
				</button>
				<Link to="lyrics">
          <button class="btn btn-lg" style={Styles.shareButtonStyle}>
					 <span class="glyphicon glyphicon-share" aria-hidden="true">
					 </span>  Share
          </button>
        </Link>
				<button class="btn btn-lg" style={Styles.addButtonStyle}>
					<span class="glyphicon glyphicon-plus" aria-hidden="true">
					</span>  Add</button>
			</div>
    );
  }
}
