import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
} from "react-mdl";

class Projects extends Component {
  state = {
    activeTab: 0
  };

  toggleCategory() {
    if (this.state.activeTab === 0) {
      return (
        <div className="react-cards" >
          {/* Projects */}
          <Card shadow={5} style={{ minWidth: "250", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center /cover"
              }}
            >
              ToDoList
            </CardTitle>
            <CardText>React App for simple To-do-list.</CardText>
            <CardActions border>
              <Button
                href="https://github.com/cynthiawilliamsa/todolist"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#eee" }}>              
            </CardMenu>
          </Card>
          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: "250", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/Advantages-of-HTML5-and-CSS3.png) center /cover"
              }}
            >
              FitForce Website
            </CardTitle>
            <CardText>HTML, CSS and Materialize CSS website.</CardText>
            <CardActions border>
              <Button
                href=" https://cynthiawilliamsa.github.io/fitforcellc/"
                colored
              >
                Check it Out
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#eee" }} />
          </Card>
          {/* Project 3*/}
          <Card shadow={5} style={{ minWidth: "250", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center /cover"
              }}
            >
              Weather App
            </CardTitle>
            <CardText>React App utilizing API.</CardText>
            <CardActions border>
              <Button
                href="https://github.com/cynthiawilliamsa/weatherapp"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#eee" }}>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="react-cards">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "250", margin: "auto" }}>
            <CardTitle

              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VxpMH7uAjyFM1BkcLs2JJ2xEbP6vNeM3mC55cMrziKTJjFqp) center /cover"
              }}
            >
              Fitness Stats App
            </CardTitle>
            <CardText>
              React App hosted on Heroku. Express, Node.js, MongoDB(MLab),
              Passport and Material UI.
            </CardText>
            <CardActions border>
              <Button href="https://ancient-brook-98081.herokuapp.com/" colored>
                Check It Out
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#eee" }} />
          </Card>
          <Card shadow={5} style={{ minWidth: "250", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VxpMH7uAjyFM1BkcLs2JJ2xEbP6vNeM3mC55cMrziKTJjFqp) center /cover"
              }}
            >
              Express Server Setup
            </CardTitle>
            <CardText>
              React App using Express for server setup and MongoDB.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/cynthiawilliamsa/fitnessstats"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#eee" }}>              
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "250", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VxpMH7uAjyFM1BkcLs2JJ2xEbP6vNeM3mC55cMrziKTJjFqp) center /cover"
              }}
            >
              Video Idea Tracker
            </CardTitle>
            <CardText>
              React App utilizing Express, MongoDB, Mongoose and Material-UI.
              Allows user to enter, edit, delete video ideas.
            </CardText>
            <CardActions border>
              <Button
                href="https://glacial-hamlet-81799.herokuapp.com/"
                colored
              >
                Check it Out
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#eee" }}>             
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Other</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
        >
          <Tab style={{ color: "white", fontWeight: "bold" }}>Front End</Tab>
          <Tab style={{ color: "white", fontWeight: "bold" }}>Full Stack</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategory()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Projects;
