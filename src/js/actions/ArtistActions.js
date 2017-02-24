import dispatcher from "../dispatcher";
import axios from "axios";


export function reloadArtistData() {
  // axios.get('https://httpbin.org/get')
  // .then(function (response) {
  //   console.log(response);
    dispatcher.dispatch({type: "receive-artists-data", artistData: [
			{ artist: "Edward Sharpe", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			{ artist: "Black Keys", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			{ artist: "Vanilla Ice", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" },
			{ artist: "Dr. Dre", imgURL: "https://openclipart.org/image/2400px/svg_to_png/202776/pawn.png" }
    ]});
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}
