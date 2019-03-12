import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import cwhead2 from '../../src/cwhead2.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Cynthia Williams</h2>
            <img src={cwhead2} alt="avatar" className="headshot"/>
            <p style={{ width: "75%", margin: "auto", paddingTop: "2em" }} />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className = "contact-list-item"
                    style={{
                      fontFamily: "Oxygen",
                      color: "white",
                      marginLeft: "25px"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (614) 805-2016
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className = "contact-list-item"
                    style={{
                      fontFamily: "Oxygen",
                      color: "white",
                      marginLeft: "25px"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />{" "}
                    {/*aria-hidden makes controls icon visibility on screen readers*/}
                    cynthiawilliamsa@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
