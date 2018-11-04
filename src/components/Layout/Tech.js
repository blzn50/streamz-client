import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import reactLogo from '../../assets/images/reactLogo.png';
import reduxLogo from '../../assets/images/reduxLogo.png';
import nodeLogo from '../../assets/images/nodeLogo.png';

const styles = {
  logoImg: {
    height: 'auto',
    width: '100px',
  },
  rowAlign: {
    marginTop: '.8rem',
    marginLeft: '15%',
  },
};

const Tech = () => (
  <Container fluid>
    <h3 className="text-center">Build with:</h3>
    <Row style={styles.rowAlign}>
      <Col xs="6" sm="4">
        <img src={nodeLogo} style={styles.logoImg} alt="node logo" />
      </Col>
      <Col xs="6" sm="4">
        <img src={reactLogo} style={styles.logoImg} alt="react logo" />
      </Col>
      <Col xs="6" sm="4">
        <img src={reduxLogo} style={styles.logoImg} alt="redux logo" />
      </Col>
    </Row>
  </Container>
);

export default Tech;
