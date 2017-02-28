import dispatcher from "../dispatcher";
import axios from "axios";

// Calls our rest API to get lyric data from our server
export function reloadLyricsData(songID) {
  axios.get(`http://localhost:8888/server.php?songID=${songID}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
    dispatcher.dispatch({
	    type: "receive-lyrics-data", 
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
	    Cold with the flex`});
  });
}