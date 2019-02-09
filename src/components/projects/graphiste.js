import React, { Component } from 'react';
import { Card, CardTitle } from 'react-mdl';

class Graphiste extends Component {
    render() {
        return (
            <div className="projects-grid">
                {/*Carte 1*/}
                
                <Card shadow={0} style={{width: '320px', height: '200px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/astrolht31/image/upload/v1548264469/img/Skin_me.png)  bottom right 15% no-repeat #46B6AC', backgroundSize: 'cover'}}></CardTitle>               
                </Card>
                
                {/*Carte 2*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/astrolht31/image/upload/v1548264467/img/logo_2.png) bottom right 15% no-repeat #46B6AC ', backgroundSize: 'cover'}}></CardTitle>
                </Card>
                
                {/*Carte 3*/}
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/astrolht31/image/upload/v1548264468/img/logo_final.png) bottom right 15% no-repeat #46B6AC', backgroundSize: 'cover'}}></CardTitle>
                </Card>
            </div>
        )
    }
}

export default Graphiste;