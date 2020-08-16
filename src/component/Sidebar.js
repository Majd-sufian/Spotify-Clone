import React from "react";
import "../style/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../reducer/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <div className="sidebar__heading">
        <img
          className="sidebar__logo"
          src="https://img.icons8.com/plasticine/2x/spotify.png"
          alt=""
        />
        <h1 className="sidebar__header__text">Spotify</h1>
      </div>

      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTSS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
