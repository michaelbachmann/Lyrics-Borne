import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

// Maintains the state of list of songs for a specific word.
class SongListStore extends EventEmitter {
	constructor() {
		super()
		this.songData = [];
	}
	// Returns song list data
	getAllSongData() { return this.songData; }
	// Action handler
	handleActions(action) {
		switch(action.type) {
			case "receive-song-list-data": {
				this.songData = action.songData;
				this.emit("change");
				break;
			}
			case "clear-song-list-data": {
				this.songData = [];
				this.emit("change");
				break;
			}
		}
	}
}
// Register store with dispatcher and export the store
const songListStore = new SongListStore;
dispatcher.register(songListStore.handleActions.bind(songListStore));
export default songListStore;
