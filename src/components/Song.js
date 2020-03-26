import React from 'react'

const Song = props => {

    let classes = ""
    if (props.selectedStatus === true){
        classes += "selected"
    }
 
    return (
        <div className={classes} onClick={props.handleClick}>{`${props.song.name} - ${props.song.artist}`}</div>    
    )
}


export default Song