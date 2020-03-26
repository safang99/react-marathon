import React from 'react'



const Playlist = props => {

    let classes = ''
   if (props.selected === true) {
    classes = "selected"
   }
 
    return (
        <li className={classes} onClick={props.handleClick}> {props.playlist.name} </li>
    )
}


export default Playlist