import dispatcher from "../dispatcher";

export function reloadWordCloud() {
  dispatcher.dispatch({type: "fetch-song-list-data"});
  setTimeout(() => {
    dispatcher.dispatch({type: "receive-song-list-data", songData: [
      { song: "Shakira", count: 25 }, { song: "Justin", count: 18 },
      { song: "Jkwon", count: 38 }, { song: "Timberlake", count: 30 },
      { song: "Eminem", count: 28 }, { song: "50Cent", count: 25 },
      { song: "Drake", count: 33 }, { song: "Doc", count: 20 },
      { song: "Nelly", count: 22 }, { song: "E40", count: 7 },
      { song: "VanillaIce", count: 25 }, { song: "Radiohead", count: 15 },
      { song: "Mocha", count: 17 }, { song: "Jet", count: 27 },
      { song: "Christina", count: 30 }, { song: "Booya", count: 15 },
      { song: "Aguilera", count: 30 }, { song: "Remote", count: 11 },
    ]});
  }, 2000);
}