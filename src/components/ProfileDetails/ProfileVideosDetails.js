import {
  Link
} from "react-router-dom";

const ProfileVideosDetails = () => {
    return (
        <div className='profile-elements'>
            <div id='VideosContainer' className='profile-container'>
              <div className='video-row'>
                <div className='video-element'>
                 <Link to='/add-video'>
                  <button className='button'>Add Video</button>
                  </Link> 
                </div>
                <div className='video-element'>
                <Link to='/update-video'>
                  <button className='button'>Update Video</button>
                </Link>  
                </div>
                <div className='video-element'>
                  <button type='submit' className='button'>Delete Video</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ProfileVideosDetails
