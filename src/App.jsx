import React, { useState } from "react";
import AlbumItem from "./components/AlbumItem";
import AlbumList from "./components/AlbumList";
import albums from "./data/data.js";
import "./App.css";
import "./style.css";

export default function App() {
  const [selectAlbum, setSelectAlbum] = useState(albums[0]);

  const albumSelected = (album) => {
    setSelectAlbum(album);
  };

  return (
    <div className="App">
      <AlbumItem album={selectAlbum} />
      <h1>Select An Album:</h1>
      <AlbumList albums={albums} onAlbumSelect={albumSelected} />
    </div>
  );
}
