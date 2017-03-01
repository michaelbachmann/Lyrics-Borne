import dispatcher from "../dispatcher";
import axios from "axios";

// Calls our rest API to get lyric data from our server
export function reloadLyricsData(songID, artist) {
	// console.log("RELOADLYRICS DATA");
	// console.log(songID);
	// console.log(artist);
	var song = songID.replace(/ /g,"+");
	// songID.split(' ').join('+');
	var artist = artist.replace(/ /g,"+");
	// console.log(song);
	// console.log(artist);
	//Another+Nigga+(To+Pimp+A+Butterfly)&artist=Kendrick+Lamar
  // axios.get(`http://localhost:8888/server.php?song=${songID}&artist=Kendrick+Lamar`)
  axios.get(`http://localhost:8888/server.php?song=${song}&artist=${artist}`)
  .then(function (response) {
    // console.log(response.data);
    // response.data.replace(/<br\s*\/?>/mg,"\n")
        dispatcher.dispatch({
	    type: "receive-lyrics-data", 
	    lyrics: response.data.replace(/<br\s*\/?>/mg,"\n")});
  })
  .catch(function (error) {
    console.log(error);
  });
}