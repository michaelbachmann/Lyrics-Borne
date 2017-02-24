import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class WordCloudStore extends EventEmitter {
	constructor() {
		super()
		this.wordData = [];
	}

	getAllWordData() {
		return this.wordData;
	}

	handleActions(action) {
		switch(action.type) {
			case "receive-word-cloud-data": {
				this.wordData = action.wordData;
				this.emit("change");
				break;
			}
		}
	}
}

const wordCloudStore = new WordCloudStore;
dispatcher.register(wordCloudStore.handleActions.bind(wordCloudStore));
export default wordCloudStore;
