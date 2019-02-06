
import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Textfield, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'
//parent app for project
class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="demo-big-content">
            <Layout>  
              <Header className="header-color" style={{backgroundColor: "#F3904F", fontFamily: 'Oxygen'}} scroll>
                  <Navigation>
                    <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
            <Drawer className="nav-color" title="Portfolio">
                <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
</div>      
      
    );
  }
}

export default App;
