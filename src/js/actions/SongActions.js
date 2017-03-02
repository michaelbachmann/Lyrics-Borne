import dispatcher from "../dispatcher";
import axios from "axios";

// Calls rest API to get songlist data from our server
export function reloadSongData(word) {
  axios.get(`http://localhost:8888/server.php?word=${word}`)
  .then(function (response) {
    var arrayOfObjects = [];
    for (var i = 0; i < response.data.length; i++) {
      arrayOfObjects.push({
        song: response.data[i][0],
        count: response.data[i][1],
        artist: response.data[i][2]
      });
    }

    // Sort objects by count
    arrayOfObjects.sort(function(a,b) {
      return (a.count > b.count) ? 1 : ((b.count < a.count) ? -1 : 0);} );    

    // Notify dispatcher we've received the songs list
    dispatcher.dispatch({type: "receive-song-list-data", songData: arrayOfObjects});
  })
  .catch(function (error) {
    console.log(error);
    
  });
}
