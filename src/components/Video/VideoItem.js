import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './Video.css';

const VideoItem = () => {
  return (
    <div className="mb-3">
      <Card className="video">
        <div className="overlay">
          <a className="play" href="#">
            <FontAwesomeIcon size="3x" color="teal" icon={faPlayCircle} />
          </a>
          <CardImg
            top
            width="100%"
            src="https://via.placeholder.com/120.png"
            alt="video preview image"
          />
        </div>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardSubtitle>Cat A, Cat B</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default VideoItem;
