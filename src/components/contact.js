import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Cyn from '../../src/Cyn.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Cynthia Williams</h2>
            <img
              src={Cyn}
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '2em'}}></p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton', color: 'white' }}>
                    <i className="fa fa-phone-square" aria-hidden='true'/>
                    (614) 805-2016</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>
                  <i className="fa fa-envelope" aria-hidden='true'/> {/*aria-hidden makes controls icon visibility on screen readers*/}
                  cynthiawilliamsa@gmail.com</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>
                  <i className="fa fa-skype" aria-hidden='true'/>
                  My Skype ID</ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>

        </Grid>
      </div>
    )
  }
}
export default Contact;