import {
  Link
} from "react-router-dom";

const ProfileVideosDetails = ({print, pages_print}) => { 

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
                 {pages_print }
              </div>
            </div>

        </div>
    );
}

export default ProfileVideosDetails
