import dispatcher from "../dispatcher";

// Calls our rest API to get lyric data from our server
export function reloadLyricsData(song) {
  dispatcher.dispatch({type: "receive-lyrics-data", songID: song});
}
