import React from "react";

const AlbumList = ({ albums, onAlbumSelect }) => {
  return (
    <div className="album-list">
      <ul>
        {albums.map((album, index) => (
          <li key={index} onClick={() => onAlbumSelect(album)}>
            <img src={album.coverImg} alt={album.name} />
            <p>{album.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
