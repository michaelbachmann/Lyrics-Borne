import React from "react";
import Styles from "../styles.css";
import Highlightable from 'highlightable';
var Highlight = require('react-highlighter');

export default class Lyrics extends React.Component {
  constructor() {
    super();
    this.state = {
      lyrics: `[Verse 1]
      Lighting stog after stog, and choke on the smoke
      They tell me to quit, dont listen what Im told
      Help me forget that this world is so cold
      I dont even know what Im chasin no more
      Tell me what I want, just keep searchin on
      Its never enough, cup after cup
      Blunt after blunt
      I wouldnt give one if I could find a fuck, ha, ha, ha
      In the cut and I put that on my momma
      And my bitch called talkin bout some drama
      I swear there aint no time for women on the come up
      Its either the pussy or the commas

      [Hook]
      Man I just wanna go flex
      Gold on my teeth and on my neck
      And Im stone cold with the FleX
      With my squad and Im smokin up a check
      Man I just wanna go flex
      Gold on my teeth and on my neck
      And Im stone cold with the flex
      With my squad and Im smokin up a check
      Cold with the flex`,
    }
  }



  render() {
		const { query } = this.props.location.query;
  	const { params } = this.props;
    const { songID, word } = params;
    const { lyrics } = this.state;
    console.log(params);
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
