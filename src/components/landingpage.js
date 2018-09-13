import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import img from '../'

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
                <img
                    src="https://images.pexels.com/photos/34490/keyboard-computer-keys-white.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="keyboard"
                    className="avatar-img"
                    style={{opacity: '.7'}}
                />
                <div className="banner-text">
                    <h1>Cynthia Williams</h1>
                    <h3>Software Engineer</h3>
                    <hr/>
                    <p style={{letterSpacing: "3px"}}>Javascript | React </p>
                    <div className="social-links">
                        {/* Linked In*/}
                        <a href="https://linkedin.com/in/cynthiawilliamsa" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                        {/* GitHub*/}
                        <a href="https://github.com/cynthiawilliamsa" target="_blank"rel="noopener noreferrer">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>
                        {/* FreecodeCamp*/}
                        <a href="" target="_blank"rel="noopener noreferrer">
                            <i className="fa fa-free-code-camp"  aria-hidden="true" />
                        </a>
                    </div>                    
                </div>
            </Cell>
        </Grid>        
      </div>
    )
  }
}

export default Landing;