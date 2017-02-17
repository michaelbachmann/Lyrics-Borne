import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Lyrics from "./pages/Lyrics";
import SongList from "./pages/SongList";
import WordCloud from "./pages/WordCloud";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
			<IndexRoute component={WordCloud}></IndexRoute>
			<Route path="lyrics" component={Lyrics}></Route>
			<Route path="songlist" name="" component={SongList}></Route>
    </Route>
  </Router>,
app);
