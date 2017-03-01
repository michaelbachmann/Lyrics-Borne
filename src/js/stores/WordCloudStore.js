import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

// Stores the state for the word cloud, search results and
// input data in the search bar
class WordCloudStore extends EventEmitter {
	constructor() {
		super();
		this.wordData = [];
		this.artistData = [];
		this.inputData = '';
	}
	// Returns the word data
	getAllWordData() { return this.wordData; }
	// Returns the artist result data
	getAllArtistData() { return this.artistData; }
	// Returns the input data
	getAllInputData() { return this.inputData; }
	// Action handler
	handleActions(action) {
		switch(action.type) {
			case "receive-word-cloud-data": {
				this.wordData = action.wordData;
				this.emit("change");
				break;
			}
			case "receive-artists-data": {
				this.artistData = action.artistData;
				this.emit("change");
				break;
			}
			case "receive-input-data": {
				this.inputData = action.inputData;
				this.emit("change");
				break;
			}
			case "clear-word-cloud-data": {
				this.wordData = [];
				this.emit("change");
				break;
			}
			case "clear-artists-data": {
				this.artistData = [];
				this.emit("change");
				break;
			}
			case "clear-input-data": {
				this.inputData = '';
				this.emit("change");
				break;
			}
		}
	}
}
// Register store with dispatcher and export the store
const wordCloudStore = new WordCloudStore;
dispatcher.register(wordCloudStore.handleActions.bind(wordCloudStore));
export default wordCloudStore;
