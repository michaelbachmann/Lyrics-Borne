import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

// Maintains state for the artist results
class ArtistsStore extends EventEmitter {
	constructor() {
		super();
		this.artistData = [];
		this.savedArtists = [];
	}
	// Returns all artists results
	getAllArtistData() { return this.artistData; }
	// Returns saved artists
	getSavedArtistData() { return this.savedArtists; }
	// Action handler
	handleActions(action) {
		switch(action.type) {
      case "receive-artists-data": {
        this.artistData = action.artistData;
				this.emit("change");
				break;
      }
      case "clear-artist-store-data": {
        this.artistData = [];
				this.emit("change");
				break;
      }
      case "save-artists-data": {
      	console.log(action.savedArtists);
      	this.savedArtists = action.savedArtists;
      	break;
      }
		}
	}
}
// Register store with dispatcher and export the store
const artistsStore = new ArtistsStore;
dispatcher.register(artistsStore.handleActions.bind(artistsStore));
export default artistsStore;
