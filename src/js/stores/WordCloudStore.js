import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
// this.artistData = [
// 	{ artist: "Edward Sharpe", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
// 	{ artist: "Black Keys", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
// 	{ artist: "Vanilla Ice", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
// 	{ artist: "Dr. Dre", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" }
// ];
class WordCloudStore extends EventEmitter {
	constructor() {
		super()
		this.wordData = [];
		this.artistData = [];
		this.inputData = '';
	}

	getAllWordData() {
		return this.wordData;
	}

	getAllArtistData() {
		return this.artistData;
	}

	getAllInputData() {
		return this.inputData;
	}

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

const wordCloudStore = new WordCloudStore;
dispatcher.register(wordCloudStore.handleActions.bind(wordCloudStore));
export default wordCloudStore;
