import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import VideoItem from '../Video/VideoItem';

class CategoriesList extends Component {
  state = {
    activeTab: '1',
  };

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Categories</h2>
            </Col>
            <Col xs="12">
              <div className="category-list">
                <Nav pills>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === '1' },
                        'category-tab'
                      )}
                      onClick={() => {
                        this.toggleTab('1');
                      }}
                    >
                      Movies
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === '2' },
                        'category-tab'
                      )}
                      onClick={() => {
                        this.toggleTab('2');
                      }}
                    >
                      Videos
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === '3' },
                        'category-tab'
                      )}
                      onClick={() => {
                        this.toggleTab('3');
                      }}
                    >
                      Documentary
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                  <Col sm="4" md="3">
                    <VideoItem />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CategoriesList;
