import React from "react";
import "./style/Player.css";
import { useDataLayerValue } from "./reducer/DataLayer";
import Sidebar from "./component/Sidebar";
import Body from "./component/Body";
import Footer from "./component/Footer";

function Player({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default Player;

// sidebar
// body
// footer
