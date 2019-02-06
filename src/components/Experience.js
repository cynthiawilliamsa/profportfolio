import React, { Component } from 'react';
import {Grid, Cell, List, ListItem} from 'react-mdl';
//child to resume
class Experience extends Component {
    render() {
        return (
            <Grid>               
                <Cell col={9}>
                    <h5 style={{marginTop: '0px'}}>{this.props.jobName}</h5>
                    <p>{this.props.jobDescription}</p>                    
                </Cell>
                <Cell col={3}>
                   <p style={{fontWeight: 'bold', textAlign: 'right'}}>{this.props.startYear} - {this.props.endYear}</p>                    
                </Cell>
            </Grid>
        )
    }
}

export default Experience;