import React, { useState } from 'react'
import Playlist from './Playlist'

const PlaylistCollection = props => {
  const [highlighted, setHighlighted] = useState(null)


  const playlistComponents = props.data.map((playlist) => {
    const handleClick = () => {  
        setHighlighted(playlist.id)
    }

    let selected = false

    if (highlighted === playlist.id) {
        selected = true
    }

    return (
         <Playlist
            key={playlist.id} 
            playlist={playlist}
            handleClick={handleClick}
            selected={selected}
         />
    )
  })

    return (
        <div className="cell small-6"> 
            <h2>Playlist</h2>
             {playlistComponents}
        </div>
    )
}


export default PlaylistCollection