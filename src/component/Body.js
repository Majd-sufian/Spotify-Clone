import React from "react";
import "../style/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../reducer/DataLayer";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          alt={discover_weekly?.owner.display_name}
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>
            {discover_weekly?.description.length === 0
              ? "description..."
              : discover_weekly?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
