import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VideoItem from '../Video/VideoItem';

const FeaturedList = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="6" md="4">
          <VideoItem />
        </Col>
        <Col sm="6" md="4">
          <VideoItem />
        </Col>
        <Col sm="6" md="4">
          <VideoItem />
        </Col>
      </Row>
      <Row>
        <Col sm="6" md="4">
          <VideoItem />
        </Col>
        <Col sm="6" md="4">
          <VideoItem />
        </Col>
        <Col sm="6" md="4">
          <VideoItem />
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedList;
