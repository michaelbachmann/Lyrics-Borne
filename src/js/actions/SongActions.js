import dispatcher from "../dispatcher";

// Calls rest API to get songlist data from our server
export function reloadWordCloud() {
  dispatcher.dispatch({type: "fetch-song-list-data"});
  setTimeout(() => {
    dispatcher.dispatch({type: "receive-song-list-data", songData: [
      { song: "Shakira", count: 25 }, { song: "Justin", count: 18 },
      { song: "Jkwon", count: 38 }, { song: "Timberlake", count: 30 },
      { song: "Eminem", count: 28 }, { song: "50Cent", count: 25 },
      { song: "Drake", count: 33 }, { song: "Doc", count: 20 },
      { song: "Nelly", count: 22 }, { song: "E40", count: 7 }
    ]});
  }, 2000);
}
