import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import Jeux from './projects/jeux';
import Graphisme from './projects/graphisme';
class Projects extends Component {

    constructor(probs) {
        super(probs);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <Jeux/>
            )
        } else if (this.state.activeTab === 1){
            return(
                <Graphisme/>
            )
        } 
    }



    render() {
        return (
             <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple className="category-tab">
                    <Tab>Jeux</Tab>
                    <Tab>Graphisme</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
             </div>
        )
    }
}

export default Projects;