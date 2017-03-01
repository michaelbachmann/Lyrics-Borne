import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

// Holds state for the lyrics page
class LyricsStore extends EventEmitter {
	constructor() {
		super();
		this.lyrics = "";
	}
    // Gets lyrics data
	getAllLyricsData() { return this.lyrics; }
    // Action handler
	handleActions(action) {
		switch(action.type) {
			case "receive-lyrics-data": {
				this.lyrics = action.lyrics;
				this.emit("change");
				break;
			}
      case "clear-lyrics-data": {
	      this.lyrics = ``;
	      this.emit("change");
	      break;
      }
		}
	}
}
// Register store with dispatcher and export the store
const lyricsStore = new LyricsStore;
dispatcher.register(lyricsStore.handleActions.bind(lyricsStore));
export default lyricsStore;
