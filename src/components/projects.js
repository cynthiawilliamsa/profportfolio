import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component { 
    
    state = { 
      activeTab: 0,      
    };    
  
  toggleCategory() {
    if(this.state.activeTab === 0){
    return ( //create child component to house card in refactor
      <div className = "react-cards">
      {/* Projects */}     
      <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) center /cover'}}>ToDoList</CardTitle>
          <CardText>
            React App for simple To-do-list.
          </CardText>
        <CardActions border>
          <Button 
            href="https://github.com/cynthiawilliamsa/todolist"
            colored>GitHub</Button>     
        </CardActions> 
        <CardMenu style={{color: '#eee'}}> 
          <IconButton name="share"/>
        </CardMenu>    
      </Card>
      {/* Project 2*/}   
      <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
        <CardTitle 
          style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) center /cover'}}>
          FitForce Website</CardTitle>
        <CardText>
          React App for Fitness Business.
        </CardText>
        <CardActions border>
          <Button 
            href=" https://cynthiawilliamsa.github.io/fitforce/"         
            colored>GitHub</Button>     
        </CardActions> 
        <CardMenu style={{color: '#eee'}}> 
          <IconButton name="share"/>
        </CardMenu>    
      </Card> 
     {/* Project 3*/}      
      <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
        <CardTitle 
          style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) center /cover'}}>
          Weather App</CardTitle>
        <CardText>
          React App utilizing API. 
        </CardText>
        <CardActions border>
          <Button
            href="https://github.com/cynthiawilliamsa/weatherapp" 
            colored>GitHub</Button>     
        </CardActions> 
        <CardMenu style={{color: '#eee'}}> 
          <IconButton name="share"/>
        </CardMenu>    
    </Card>
  </div>          
      )
    } else if(this.state.activeTab === 1) {
      return (
      <div>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
          <CardTitle 
            style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) center /cover'}}>
            Fitness Stats App
          </CardTitle>
            <CardText>
              Single page React App using Express framework for server setup. 
            </CardText>
            <CardActions border>
              <Button 
                href="https://github.com/cynthiawilliamsa/advanced-express-practice"
                colored>GitHub</Button>     
            </CardActions> 
            <CardMenu style={{color: '#eee'}}> 
              <IconButton name="share"/>
            </CardMenu>    
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
          <CardTitle 
            style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) center /cover'}}>
            Basic Express Server Setup
          </CardTitle>
            <CardText>
              React App utilizing Express, MongoDB, Mongoose and Material-UI. Allows clients to input metrics and track progress.
            </CardText>
            <CardActions border>
              <Button 
                href="https://github.com/cynthiawilliamsa/fitnessstats"
                colored>GitHub</Button>     
            </CardActions> 
            <CardMenu style={{color: '#eee'}}> 
              <IconButton name="share"/>
            </CardMenu>    
        </Card>
      </div> 
      )
   } else if(this.state.activeTab === 2){
      return (
      <div><h1>This is Other</h1></div> 
     )
  }
}
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Front-End</Tab>
          <Tab>Full Stack</Tab>
          {/* <Tab>MongoDB</Tab> */}
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className='content'>{this.toggleCategory()}</div>  
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}
export default Projects;