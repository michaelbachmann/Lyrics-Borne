import React from "react";
import Styles from "../styles.css"
import { TagCloud } from "react-tagcloud";
import * as WordCloudActions from "../actions/WordCloudActions";
import WordCloudStore from "../stores/WordCloudStore";
import { Link, browserHistory } from 'react-router';

export default class WordCloud extends React.Component {
  constructor() {
  	super();
  	this.getWordData = this.getWordData.bind(this);
  	this.state = {
  		wordData: WordCloudStore.getAllWordData(),
  	};
  }

  componentWillMount() {
  	WordCloudStore.on("change", this.getWordData);
  }

  componentWillUnmount() {
  	WordCloudStore.removeListener("change", this.getWordData);
  }

  getWordData() {
  	this.setState({
  		wordData: WordCloudStore.getAllWordData(),
  	});
  }

  reloadWordCloud() {
  	WordCloudActions.reloadWordCloud();
  }

  render() {
    const { wordData } = this.state;
    return (
			<div>
				<h1 style={Styles.titleStyle}>Lyrical Word Clouds</h1>
				<TagCloud minSize={12}
            maxSize={35}
            tags={wordData}
            onClick={
              (tag) => {
                this.props.history.push({
                  pathname: `/songlist/${tag.value}`,
                  search: `?word=${tag.value}`,
                });
              }
            }
        />
        <div class="input-group" style={Styles.inputStyle}>
					<input type="text" class="form-control " placeholder="Search artists..." aria-describedby="sizing-addon2"></input>
				</div>
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
