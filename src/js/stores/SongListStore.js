import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class SongListStore extends EventEmitter {
	constructor() {
		super()
		this.songData = [
      { song: "Lose Yourself", count: 25 }, { song: "The Next Episode", count: 18 },
      { song: "Go Flex", count: 38 }, { song: "Still DRE", count: 30 },
    ];
	}

	getAllSongData() {
		return this.songData;
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
