import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
          <Layout style={{background: 'url(img/img7.jpg) center / cover'}}>
              <Header transparent className="header-color" title={<Link style={{textDecoration: 'none',
              color: 'white'
            }} to={"/"} >KOLOGO Josias</Link>} scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none',
              color: 'black'
            }} to={"/"} >KOLOGO Josias</Link>} >
                  <Navigation>
                      <Link to="/resume">Resume</Link>
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

export default App;
