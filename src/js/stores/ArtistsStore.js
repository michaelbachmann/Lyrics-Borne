import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

			// { artist: "Edward Sharpe", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			// { artist: "Black Keys", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			// { artist: "Vanilla Ice", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			// { artist: "Dr. Dre", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" }

// Maintains state for the artist results
class ArtistsStore extends EventEmitter {
	constructor() {
		super();
		this.artistData = [];
	}
	// Returns all artists results
	getAllArtistData() { return this.artistData; }
	// Action handler
	handleActions(action) {
		switch(action.type) {
      case "receive-artists-data": {
        this.artistData = action.artistData;
				this.emit("change");
				break;
      }
      case "clear-artists-data": {
        this.artistData = [];
				this.emit("change");
				break;
      }
		}
	}
}
// Register store with dispatcher and export the store
const artistsStore = new ArtistsStore;
dispatcher.register(artistsStore.handleActions.bind(artistsStore));
export default artistsStore;
