import React from 'react';
import { Container } from 'reactstrap';
import teamPlaceholder from '../../assets/images/team.placeholder.png';

const Team = () => (
  <Container style={{ height: '40vh' }}>
    <h4 className="text-center">Team</h4>
    <img
      src={teamPlaceholder}
      alt="team placeholder"
      style={{ height: '250px', width: '300px' }}
      className="float-left"
    />
    <img
      src={teamPlaceholder}
      alt="team placeholder"
      style={{ height: '250px', width: '300px' }}
      className="float-right"
    />
  </Container>
);

export default Team;
