import React, { Component } from 'react';
import { Player } from 'video-react';

class Video extends Component {
    render(){
        return(
            <div align="center">
                <Player
                    playsInline
                    src="https://vdo.react-dev.tk/Anthuning.mov"
                />
            </div>
        )
    }
}

export default Video;