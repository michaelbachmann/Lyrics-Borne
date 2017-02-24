import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ArtistsStore extends EventEmitter {
	constructor() {
		super();
		this.artistData = [];
	}

	getAllArtistData() {
		return this.artistData;
	}

	handleActions(action) {
		switch(action.type) {
      case "receive-artists-data": {
        this.artistData = action.artistData;
				this.emit("change");
				break;
      }
		}
	}
}

const artistsStore = new ArtistsStore;
dispatcher.register(artistsStore.handleActions.bind(artistsStore));
export default artistsStore;
