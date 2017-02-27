import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class LyricsStore extends EventEmitter {
	constructor() {
		super()
		this.lyrics = `[Verse 1]
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
    Cold with the flex`;
	}

	getAllLyricsData() {
		return this.lyrics;
	}

	handleActions(action) {
		switch(action.type) {
			case "receive-lyric-data": {
				this.lyrics = action.lyrics;
				this.emit("change");
				break;
			}
		}
	}
}

const lyricsStore = new LyricsStore;
dispatcher.register(lyricsStore.handleActions.bind(lyricsStore));
export default lyricsStore;
