import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import whoiam from '../../src/whoiam.jpg';

class WhoIAm extends Component {
  render() {
    return (
      <div style={{width: '90%', margin: 'auto'}}>    
        <Grid className="container">
        <Cell col={6}>
        <img  
              src={whoiam}
              alt="avatar"
              style={{maxWidth:'95%', marginTop: "15%"}}
            />
        
        </Cell>
        <Cell col={6}>
        <h4>Hello there, I'm Cynthia.</h4>
        <p style={{fontSize:"18px"}}>A Full Stack JavaScript Developer and Certified Personal Trainer residing in the Austin, TX area. I have a Bachelor's of Science in Business Administration and have held various positions that allow me to develop strong leadership, project management and business skills over the years.  However, something was still missing career-wise.</p><br/>
        <p style={{fontSize:"18px"}}>Upon my journey to discover what that missing piece was, I began coding by self-teaching through various online resources.  I started with Python as it was the most simplistic to me and is easily readable.  In early 2018 I began researching options to expedite the learning process and offer an environment where I could learn from others.  I enrolled in Austin Coding Academy in April 2018 and completed the full stack JavaScript web development immersive.  For the last year I've worked hard, built some awesome projects and learned a ton. I love programming and the continuous learning opportunies it provides and am eager to land a developer role with a company where I can contribute my current skills while learning new ones.  Take a look around and reach out if my skills are what your company is looking for in a programmer.</p>
        
        
        </Cell>
    </Grid>
</div>
    )
  }
}
export default WhoIAm;