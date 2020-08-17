import React from "react";
import "../style/SidebarOption.css";
import { useDataLayerValue } from "../reducer/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import { useState } from "react";

const spotify = new SpotifyWebApi();

function SidebarOption({ option = "test", Icon, index = 0 }) {
  const [{ indexList, ids, state }, dispatch] = useDataLayerValue();
  const [click, setClick] = useState(false);

  const changeIndex = () => {
    spotify.getPlaylist(ids[index]).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
      setClick(!click);
    });
  };

  return (
    <div onClick={changeIndex} className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{option}</h4>
      ) : (
        <p className={click ? "OnClick" : ""}>{option}</p>
      )}
    </div>
  );
}

export default SidebarOption;
