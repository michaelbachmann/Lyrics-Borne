import dispatcher from "../dispatcher";

export function reloadLyricsData() {
  dispatcher.dispatch({type: "fetch-song-list-data"});
}
