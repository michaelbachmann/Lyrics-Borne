import React from "react";
import Styles from "../styles.css"
import { TagCloud } from "react-tagcloud";

export default class WordCloud extends React.Component {
  // constructor() {
  // 	super();
  // 	this.getWordData = this.getWordData.bind(this);
  // 	this.state = {
  // 		wordData: WordCloud.getAllWordData()
  // 	};
  // }

  // componentWillMount() {
  // 	WordCloudStore.on("change", this.getWordData);
  // }

  // componentWillUnmount() {
  // 	WordCloudStore.removeListener("change", this.getWordData);	
  // }

  // getWordData() {
  // 	this.setState({
  // 		wordData: WordCloudStore.getAllWordData(),
  // 	});
  // }

  // reloadWordCloud() {
  // 	WordCloudActions.reloadWordCloud();
  // }

  renderWordCloud() {

  }

  render() {
		const data = [
		  { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
		  { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
		  { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
		  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
		  { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
		  { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
		  { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
		  { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
		  { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
		];
    return (
			<div>
				<h1 style={Styles.titleStyle}>Lyrical Word Clouds</h1>
				<TagCloud minSize={12}
            maxSize={35}
            tags={data}
            onClick={tag => alert(`'${tag.value}' was selected!`)} />
				<div class="input-group" style={Styles.inputStyle}>
					<input type="text" class="form-control " placeholder="Search artists..." aria-describedby="sizing-addon2"></input>
				</div>
				<button class="btn btn-lg" style={Styles.searchButtonStyle}>
					<span class="glyphicon glyphicon-search" aria-hidden="true">
					</span>  Search
				</button>
				<button class="btn btn-lg" style={Styles.shareButtonStyle}>
					<span class="glyphicon glyphicon-share" aria-hidden="true">
					</span>  Share</button>
				<button class="btn btn-lg" style={Styles.addButtonStyle}>
					<span class="glyphicon glyphicon-plus" aria-hidden="true">
					</span>  Add</button>
			</div>
    );
  }
}
