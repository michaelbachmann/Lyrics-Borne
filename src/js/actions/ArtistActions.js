import dispatcher from "../dispatcher";

// export functions

export function reloadWordCloud() {
	dispatcher.dispatch({type: "receive-wc-data",
		data: {
			
		}
});
}