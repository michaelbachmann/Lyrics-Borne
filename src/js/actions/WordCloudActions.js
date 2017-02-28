import dispatcher from "../dispatcher";
import axios from "axios";

// Calls rest API to get artist data from our server
export function reloadArtistData(query) {
  const filteredQuery = query.replace(/\s\s+/g, ' ');
  const convertedQuery = filteredQuery.replace(/ /g,"+");
  axios.get(`http://localhost:8888/server.php?artistName=${convertedQuery}`)
  .then(function (response) {
    if (response.data.length === 1) {
      reloadWordCloud()
    }
    console.log(response);
    var kendrick = response.data[0];
    console.log(kendrick);
        dispatcher.dispatch({type: "receive-artists-data", artistData: response.data});
        reloadWordCloud(0);
    // console.log(JSON.parse(response.data));
  })
  .catch(function (error) {
    console.log(error);
        dispatcher.dispatch({type: "receive-artists-data", artistData: [
      { artist: "Edward Sharpe", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
      { artist: "Black Keys", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
      { artist: "Vanilla Ice", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
      { artist: "Dr. Dre", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" }
    ]});
  });
}

// Calls rest API to get word cloud data from our server
export function reloadWordCloud(artistID) {
  console.log(artistID);
  axios.get(`http://localhost:8888/server.php?artistID=0`)
  .then(function (response) {
    console.log(response.data);


    // dispatcher.dispatch({type: "receive-word-cloud-data", wordData: [
    //   { value: "Shakira", count: 25 }, { value: "Justin", count: 18 },
    //   { value: "Jkwon", count: 38 }, { value: "Timberlake", count: 30 },
    //   { value: "Eminem", count: 28 }, { value: "50Cent", count: 25 },
    //   { value: "Drake", count: 33 }, { value: "Doc", count: 20 },
    //   { value: "Nelly", count: 22 }, { value: "E40", count: 7 },
    //   { value: "VanillaIce", count: 25 }, { value: "Radiohead", count: 15 },
    //   { value: "Mocha", count: 17 }, { value: "Jet", count: 27 },
    //   { value: "Christina", count: 30 }, { value: "Booya", count: 15 },
    //   { value: "Aguilera", count: 30 }, { value: "Remote", count: 11 },
    //   { value: "Flex", count: 38 }
    // ]});

  })
  .catch(function (error) {
    console.log(error);
        dispatcher.dispatch({type: "receive-word-cloud-data", wordData: [
      { value: "Shakira", count: 25 }, { value: "Justin", count: 18 },
      { value: "Jkwon", count: 38 }, { value: "Timberlake", count: 30 },
      { value: "Eminem", count: 28 }, { value: "50Cent", count: 25 },
      { value: "Drake", count: 33 }, { value: "Doc", count: 20 },
      { value: "Nelly", count: 22 }, { value: "E40", count: 7 },
      { value: "VanillaIce", count: 25 }, { value: "Radiohead", count: 15 },
      { value: "Mocha", count: 17 }, { value: "Jet", count: 27 },
      { value: "Christina", count: 30 }, { value: "Booya", count: 15 },
      { value: "Aguilera", count: 30 }, { value: "Remote", count: 11 },
      { value: "Flex", count: 38 }
    ]});
  });
}

// Updates state to make sure the UI updates correctly after an
// an artist is selected
export function artistClicked(artistName) {
  // clearAristData();
  reloadInputData(artistName);
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