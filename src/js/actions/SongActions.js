import dispatcher from "../dispatcher";
import axios from "axios";

// Calls rest API to get songlist data from our server
export function reloadSongData(songID) {
    axios.get(`http://localhost:8888/server.php?songID=${songID}`)
  .then(function (response) {
    console.log(response);
    dispatcher.dispatch({type: "receive-song-list-data", songData: [
      { song: "Shakira", count: 25 }, { song: "Justin", count: 18 },
      { song: "Jkwon", count: 38 }, { song: "Timberlake", count: 30 },
      { song: "Eminem", count: 28 }, { song: "50Cent", count: 25 },
      { song: "Drake", count: 33 }, { song: "Doc", count: 20 },
      { song: "Nelly", count: 22 }, { song: "E40", count: 7 }
    ]});
  })
  .catch(function (error) {
    console.log(error);
    dispatcher.dispatch({type: "receive-song-list-data", songData: [
      { song: "Shakira", count: 25 }, { song: "Justin", count: 18 },
      { song: "Jkwon", count: 38 }, { song: "Timberlake", count: 30 },
      { song: "Eminem", count: 28 }, { song: "50Cent", count: 25 },
      { song: "Drake", count: 33 }, { song: "Doc", count: 20 },
      { song: "Nelly", count: 22 }, { song: "E40", count: 7 }
    ]});
  });
}
