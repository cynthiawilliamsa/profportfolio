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
          React App styled with Material UI.
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
      <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) center /cover'}}>Final Project</CardTitle>
      <CardText>
        React App Styled with ???? and utilizing API.
      </CardText>
      <CardActions border>
        <Button          
          colored>GitHub</Button>     
      </CardActions> 
      <CardMenu style={{color: '#eee'}}> 
        <IconButton name="share"/>
      </CardMenu>    
    </Card> 
     {/* Project 3*/}      
    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) center /cover'}}>Portfolio</CardTitle>
    <CardText>
      Single page React App style with React-MDL. 
    </CardText>
    <CardActions border>
      <Button colored>GitHub</Button>     
    </CardActions> 
    <CardMenu style={{color: '#eee'}}> 
      <IconButton name="share"/>
    </CardMenu>    
  </Card>
  </div>          
      )
    } else if(this.state.activeTab === 1) {
      return (
      <div><h1>This is Other</h1></div> 
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
          <Tab>React</Tab>
          <Tab>Other</Tab>
          <Tab>Other</Tab>
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