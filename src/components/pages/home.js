import React from 'react';
import LiveStreamZone from '../VideoDetails/LiveStreamZone';
import VideoListingZone from '../VideoDetails/VideoListingZone';

const Home = () => {

    return (
        <div className='home'>
        <h1 className='heading c-text'>Live Streams</h1>
        <LiveStreamZone/>,
        <VideoListingZone  header='Uploaded Videos' />
        <br/>
        </div>
    )
};

export default Home;
