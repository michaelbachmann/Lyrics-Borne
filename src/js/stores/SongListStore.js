import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class SongListStore extends EventEmitter {
	constructor() {
		super();
		this.songData = [
			{ value: "Song 1", count: 8, { value: "Song 2", count: 5} }
		];
	}

	getAllSongData() {
		return this.wordData;
	}

	handleActions(action) {
		switch(action.type) {
			case "receive-song-list-data": {
				this.songData = action.songData;
				this.emit("change");
				break;
			}
		}
	}
}

const songListStore = new SongListStore;
dispatcher.register(songListStore.handleActions.bind(songListStore));
export default songListStore;