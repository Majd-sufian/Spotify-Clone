import React, { useEffect, useState } from "react";
import "./style/App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./reducer/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, playlists }, dispatch] = useDataLayerValue();
  const [token, setTokon] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setTokon(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      // dispatch({
      //   type: "SET_PLAYLISTS",
      //   playlists: "dddd",
      // });
    }
  }, []);

  console.log(playlists);
  return (
    <div className="app">
      {/* {token ? <Player spotify={spotify} /> : <Login />} */}
      <Player spotify={spotify} />
    </div>
  );
}

export default App;
