import dispatcher from "../dispatcher";
import axios from "axios";

// Calls rest API to get songlist data from our server
export function reloadSongData(word) {
  console.log(word);
    axios.get(`http://localhost:8888/server.php?word=${word}`)
  .then(function (response) {
    console.log(response);

    var arrayOfObjects = [];
    for (var i = 0; i < response.data.length; i++) {
      Object.keys(response.data[i]).forEach(function(key) {
        arrayOfObjects.push({song: key, count: (response.data[i])[key]})
      });
    }
    console.log(arrayOfObjects);

    dispatcher.dispatch({type: "receive-song-list-data", songData: arrayOfObjects});
  })
  .catch(function (error) {
    console.log(error);
  });
}
