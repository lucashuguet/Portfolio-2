import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
              <a href="https://react-dev.tk/aboutme">À propos de moi</a>
              <a href="/">Projets</a>
              <a href="https://react-dev.tk/contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Portfolio">
            <Navigation>
              <a href="https://react-dev.tk/">Accueil</a>
              <a href="https://react-dev.tk/aboutme">À propos de moi</a>
              <a href="/">Projets</a>
              <a href="https://react-dev.tk/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Projects/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
