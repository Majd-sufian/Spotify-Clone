import React from "react";
import "../style/Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../reducer/DataLayer";
import { useState } from "react";

function Footer() {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const [songIndex, setSongIndex] = useState(0);

  const previousSong = () => {
    // setSongIndex(songIndex + 1);
    let song = songIndex;
    if (song !== 0) {
      setSongIndex(songIndex - 1);
    }
  };

  const nextSong = () => {
    // setSongIndex(songIndex + 1);
    let max = discover_weekly?.tracks?.items.length - 1;
    let song = songIndex;
    if (max > song) {
      setSongIndex(songIndex + 1);
    }
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={
            discover_weekly?.tracks?.items[songIndex].track.album.images[0].url
          }
          // src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Usher_-_Confessions_album_cover.jpg/220px-Usher_-_Confessions_album_cover.jpg"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>{discover_weekly?.tracks?.items[songIndex].track.album.name}</h4>
          <p>
            {discover_weekly?.tracks?.items[songIndex].track.artists[0].name}
          </p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={previousSong} className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon onClick={nextSong} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;

// - pass discovery music to footer
// - make the song dynamic with the footer left
