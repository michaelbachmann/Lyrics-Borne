import React from "react";
import Styles from "../styles.css"
import { TagCloud } from "react-tagcloud";
import * as WordCloudActions from "../actions/WordCloudActions";
import WordCloudStore from "../stores/WordCloudStore";
import ArtistsStore from "../stores/ArtistsStore";
import ArtistResult from "../components/ArtistResult";
import { Link, browserHistory } from 'react-router';
import RandomColor from 'randomcolor';

export default class WordCloud extends React.Component {
  constructor() {
  	super();
  	this.getWordData = this.getWordData.bind(this);
  	this.state = {
  		wordData: WordCloudStore.getAllWordData(),
      artistData: ArtistsStore.getAllArtistData(),
      isGrayscale: false,
      colorOpts: {
        luminosity: 'dark',
        format: 'rgba',
        alpha: 0.5
      }
  	};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
  	WordCloudStore.on("change", this.getWordData);
    ArtistsStore.on("change", this.getArtistData);
  }

  componentWillUnmount() {
  	WordCloudStore.removeListener("change", this.getWordData);
    ArtistsStore.removeListener("change", this.getArtistData);

  }

  getWordData() {
  	this.setState({
  		wordData: WordCloudStore.getAllWordData(),
  	});
  }

  getArtistData() {
    this.setState({
      artistData: ArtistsStore.getAllArtistData(),
    });
  }

  reloadWordCloud() {
  	WordCloudActions.reloadWordCloud();
  }

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

  render() {
    const { artistData, wordData, isColor, colorOpts } = this.state;
    const mappedArtistData = artistData.map((artist, i) => <ArtistResult key={i} artist={artist.artist} imgURL={artist.imgURL}/> );

    return (
			<div>
				<h1 style={Styles.titleStyle}>Lyrical Word Clouds</h1>

        <TagCloud minSize={12}
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

        <div class="input-group" style={Styles.inputStyle}>
					<input type="text" class="form-control " placeholder="Search artists..." aria-describedby="sizing-addon2"></input>
				</div>

        <table style={Styles.resultTableStyle}><tbody>{mappedArtistData}</tbody></table>

				<button class="btn btn-lg" style={Styles.searchButtonStyle} onClick={this.reloadWordCloud.bind(this)}>
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
