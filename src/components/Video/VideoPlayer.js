import React from 'react';
import videoPlaceholder from '../../assets/images/videoPlaceholder.png';

export default props => (
  <video controls height="500px" poster={videoPlaceholder}>
    <p>
      Your browser doesn't support HTML5 video. Here is a{' '}
      <a href="myVideo.mp4">link to the video</a> instead.
    </p>
  </video>
);
