import dispatcher from "../dispatcher";
import axios from "axios";

// Calls rest API to get songlist data from our server
export function reloadSongData(songID) {
    axios.get(`http://localhost:8888/server.php?songID=${songID}`)
  .then(function (response) {
    console.log(response);
    dispatcher.dispatch({type: "receive-song-list-data", songData: [
      { song: "Lose Yourself", count: 25 }, { song: "The Next Episode", count: 18 },
      { song: "Go Flex", count: 38 }, { song: "Still DRE", count: 30 },
    ]});
  })
  .catch(function (error) {
    console.log(error);
    dispatcher.dispatch({type: "receive-song-list-data", songData: [
      { song: "Lose Yourself", count: 25 }, { song: "The Next Episode", count: 18 },
      { song: "Go Flex", count: 38 }, { song: "Still DRE", count: 30 },
    ]});
  });
}
