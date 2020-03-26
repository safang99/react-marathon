import React, {useState} from 'react'
import Song from './Song'

const SongCollection = props => {
    const [selected, setSelected] = useState(null)


    const songList = props.data.map((song) => {
        const handleClick = () => {
            setSelected(song.id)
        }

        let selectedStatus = false
        
        if (selected === song.id){
            selectedStatus = true
        }

        return(
            <Song 
                key={song.id} 
                song={song}
                handleClick={handleClick}
                selectedStatus={selectedStatus}
            />
        )
    })

    return (
       <div className="cell small-6">
          <h2>Songs</h2> 
            {songList}
        </div>
    )
}


export default SongCollection