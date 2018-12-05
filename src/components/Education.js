import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
//child componenet to resume
class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={3}>
                   <p style={{fontWeight: 'bold'}}>{this.props.startYear} - {this.props.endYear}</p>                    
                </Cell>
                <Cell col={9}>
                    <h5 style={{marginTop: '0px'}}>{this.props.schoolName}</h5>
                    <p>{this.props.schoolDescription}</p>

                </Cell>
            </Grid>
        )
    }
}

export default Education;