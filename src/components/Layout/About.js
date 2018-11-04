import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import appStoreLogo from '../../assets/images/appStore.png';
import playStoreLogo from '../../assets/images/playStore.png';
import './About.css';

const About = () => (
  <Container fluid>
    <Row>
      <Col md="6">
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
      </Col>
      <Col className="right-about" md="6">
        <h5 className="text-center">COMING SOON</h5>
        <div className="store">
          <img src={playStoreLogo} alt="app store logo" className="logo " />
          <img src={appStoreLogo} alt="play store logo" className="logo" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default About;
