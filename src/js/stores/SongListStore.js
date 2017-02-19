import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class SongListStore extends EventEmitter {
	constructor() {
		super()
		this.songData = [
      { song: "jQuery", count: 25 }, { song: "MongoDB", count: 18 },
      { song: "JavaScript", count: 38 }, { song: "React", count: 30 },
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
