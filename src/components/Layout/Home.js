import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import './Home.css';
import Team from './Team';
import About from './About';
import Tech from './Tech';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <div className="img-cover">
            <div
              style={{ flexDirection: 'column', height: '100vh', paddingTop: '30vh' }}
              className="text-white text-center"
            >
              <h2>Welcome to Streamz</h2>
              <h5>Where you can stream videos without worrying of buffering</h5>
              <br />
              <p>Experience a revolution in video streaming.</p>
            </div>
          </div>
          <Container className="text-center my-5">
            <p align="justify">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Container>
          <hr />
          <Team />
          <hr />
          <Tech />
          <hr />
          <About />
        </main>
        <hr />
        <Footer />
      </Fragment>
    );
  }
}
export default Home;
