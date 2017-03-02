import dispatcher from "../dispatcher";
import axios from "axios";
import WordCloudStore from "../stores/WordCloudStore";

// Calls rest API to get artist data from our server
export function reloadArtistData(query) {
  const filteredQuery = query.replace(/\s\s+/g, ' ');
  const convertedQuery = filteredQuery.replace(/ /g,"+");
  axios.get(`http://localhost:8888/server.php?artistName=${convertedQuery}`)
  .then(function (response) {
    dispatcher.dispatch({type: "receive-artists-data", artistData: response.data});
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Calls rest API to get word cloud data from our server
export function reloadWordCloud(artistID) {
  axios.get(`http://localhost:8888/server.php?artistID=0`)
  .then(function (response) {
    var arrayOfObjects = [];
    Object.keys(response.data).forEach(function(key) {
      arrayOfObjects.push({value: key, count: response.data[key]})
    });
    dispatcher.dispatch({type: "receive-word-cloud-data", wordData: arrayOfObjects});
    clearInputData();
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Updates state to make sure the UI updates correctly after an
// an artist is selected
export function artistClicked(artistName) {
  var artists = WordCloudStore.getAllArtistData();
  clearAristData();
  reloadInputData(artistName);
}

// Store artist variable
export function storeArtist(artistName) {
  console.log(artistName);
  dispatcher.dispatch({type: "save-artists-data", savedArtists: artistName});
}

// Keeps the UI updated for the search bar
export function reloadInputData(query) {
  dispatcher.dispatch({type: "receive-input-data", inputData: query});
}

// Clears the word cloud in store
export function clearWordCloudData() {
  dispatcher.dispatch({type: "clear-word-cloud-data"});
}

// Clears the input data in store
export function clearInputData() {
  dispatcher.dispatch({type: "clear-input-data"});
}

// clears artist data in store
export function clearAristData() {
  dispatcher.dispatch({type: "clear-artists-data"});
}

// Clears all store data
export function clearWordCloudStore() {
  dispatcher.dispatch({type: "clear-word-cloud-store"});
}