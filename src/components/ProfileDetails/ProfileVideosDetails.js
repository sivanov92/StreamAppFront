import {
  Link
} from "react-router-dom";

const ProfileVideosDetails = ({print}) => { 
    return (
        <div className='profile-elements'>
            <div id='VideosContainer' className='profile-container'>
              <div className='video-row'>
                <div className='video-element profile-videos-add'>
                 <Link to='/add-video'>
                  <button className='button'>Add Video</button>
                  </Link> 
                </div>
              </div>
              <br/>
               { print }
               <br/>
               <div className='paginator'>
                 <div className='button pages'>1</div>
                 <div className='button pages'>2</div>
              </div>
            </div>

        </div>
    );
}

export default ProfileVideosDetails
