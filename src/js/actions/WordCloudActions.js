import dispatcher from "../dispatcher";
import axios from "axios";

export function reloadWordCloud() {
  dispatcher.dispatch({type: "fetch-word-cloud-data"});
  axios.get('https://httpbin.org/get')
  .then(function (response) {
    console.log(response);

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

  })
  .catch(function (error) {
    console.log(error);
  });
}

export function clearWordCloudData() {
  dispatcher.dispatch({type: "clear-word-cloud-data"});
}

export function clearInputData() {
  dispatcher.dispatch({type: "clear-input-data"});
}

export function clearAristData() {
  dispatcher.dispatch({type: "clear-artists-data"});
}

export function reloadArtistData(query) {
  axios.get('https://httpbin.org/get')
  .then(function (response) {
    console.log(response);
    dispatcher.dispatch({type: "receive-artists-data", artistData: [
      { artist: "Edward Sharpe", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
      { artist: "Black Keys", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
      { artist: "Vanilla Ice", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
      { artist: "Dr. Dre", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" }
    ]});
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function reloadInputData(query) {
  dispatcher.dispatch({type: "receive-input-data", inputData: query});
}
//
// { artist: "Edward Sharpe", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
// { artist: "Black Keys", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
// { artist: "Vanilla Ice", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
// { artist: "Dr. Dre", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" }
