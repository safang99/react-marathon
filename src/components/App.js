import React from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {

  return (
    <div className="grid-container app">
      <h2 className="title">React Music Player</h2>
      <div className="grid-x">
      
        <PlaylistCollection data={props.data.playlists} />
        <SongCollection data={props.data.songs} />
      </div>
    </div>
  );
}

export default App
