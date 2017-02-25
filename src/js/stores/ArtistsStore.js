import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ArtistsStore extends EventEmitter {
	constructor() {
		super();
		this.artistData = [
			{ artist: "Edward Sharpe", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			{ artist: "Black Keys", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			{ artist: "Vanilla Ice", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			{ artist: "Dr. Dre", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" }
		];
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
