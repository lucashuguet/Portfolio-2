import React, { Component } from 'react';
import { Player } from 'video-react';
import { Card, CardTitle } from 'react-mdl';

class Graphisme extends Component {
    render(){
        return(
            <div className="player">
                <div className="player-box">
                    <Player
                        src="https://res.cloudinary.com/astrolht31/video/upload/v1551879993/img/Anthuning.mov"
                    />
                </div>
                <div className="player-box">
                    <Player
                        src="https://res.cloudinary.com/astrolht31/video/upload/v1551879958/img/Woaw.mov"
                    />
                </div>
                <div className="player-box">
                    <Player
                        src="https://res.cloudinary.com/astrolht31/video/upload/v1551879764/img/Vive_les_abres.mov"
                    />
                </div>
                <div className="player-box">
                    <Player
                        src="https://res.cloudinary.com/astrolht31/video/upload/v1551879717/img/The_New_Apple.mov"
                    />
                </div>
                {/*Carte 1*/}
                
                <Card shadow={0} style={{width: '320px', height: '200px'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/astrolht31/image/upload/v1548264469/img/Skin_me.png)  bottom right 15% no-repeat #46B6AC', backgroundSize: 'cover'}}></CardTitle>               
                </Card>
                
                {/*Carte 2*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/astrolht31/image/upload/v1548264467/img/logo_2.png) bottom right 15% no-repeat #46B6AC ', backgroundSize: 'cover'}}></CardTitle>
                </Card>
                
                {/*Carte 3*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/astrolht31/image/upload/v1548264468/img/logo_final.png) bottom right 15% no-repeat #46B6AC', backgroundSize: 'cover'}}></CardTitle>
                </Card>
            </div>
        )
    }
}

export default Graphisme;