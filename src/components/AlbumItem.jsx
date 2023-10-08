import React from "react";
import playBtn from "../assets/play-btn.png";

const AlbumItem = ({ album }) => {

  return (
    <div className="album-detail">
      <div className="album-cover">
        <img src={album.coverImg} alt={album.name} />
      </div>

      <ol>
        {album.tracks.map((track, index) => (
          <li key={index}>
            {track}
            <img src={playBtn} alt="play" className="play-btn" />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AlbumItem;
