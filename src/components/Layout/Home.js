import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import FeaturedList from './FeaturedList';
import Team from './Team';
import About from './About';
import Tech from './Tech';
import Footer from './Footer';
import CategoriesList from './CategoriesList';
import './Home.css';

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
          <Container fluid className="my-4">
            <Row>
              <Col md="3">
                <Card>
                  <CardImg
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97300&w=318&h=300"
                    alt="placeholder beside featured list"
                  />
                  <CardBody>
                    <CardTitle>Placeholder Title</CardTitle>
                    <CardText>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in r
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <FeaturedList />
              </Col>
            </Row>
          </Container>
          <hr />
          <CategoriesList />
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
