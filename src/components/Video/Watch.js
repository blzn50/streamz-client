import React from 'react';
import Player from './VideoPlayer';

const Watch = props => (
  <div>
    <Player />
    <div className="video-info">
      <div>
        <h3>Title</h3>
        <p>Description</p>
        <p>Views</p>
        <p>Tags</p>
      </div>

      {/* left side */}
      <div>
        <p>Date</p>
        <p>Uploader</p>
      </div>
    </div>
  </div>
);

export default Watch;
