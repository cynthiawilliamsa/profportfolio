import React, { Component } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
//parent app for project
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              style={{ backgroundColor: "#3B4371", fontFamily: "Oxygen" }}
              scroll
            >
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/whoiam">Who I Am</Link>
                <Link to="/seemywork">See My Work</Link>
                <Link to="/reachout">Reach Out</Link>
              </Navigation>
            </Header>
            <Drawer className="nav-color">
              <Navigation>
              <Link to="/">Home</Link>
                <Link to="/whoiam">Who I Am</Link>
                <Link to="/seemywork">See My Work</Link>
                <Link to="/reachout">Reach Out</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
