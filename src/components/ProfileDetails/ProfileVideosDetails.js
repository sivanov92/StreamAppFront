import VideoDetailsRow from './VideoDetailsRow';
import {
  Link
} from "react-router-dom";
import {base_api_route } from '../../config';

const ProfileVideosDetails = ({userData}) => {
    var videoData = [];
    var video_print = [];

    const getVideos = async()=>{
      let response = await fetch(base_api_route+'/videos/author/'+userData.id);
      if(response.ok){
        videoData = await JSON.parse(response.json());
      }
    }

    getVideos();
    
    for(let element of videoData){
      video_print.push(<VideoDetailsRow id={element.id} title={element.title} 
                      updated_at={element.updated_at} video_url={element.file}
                      video_uid={element.uid}/>);
    }
    if(videoData.length === 0){
      video_print = 'No videos found ! Please add one'; 
    }
    return (
        <div className='profile-elements'>
            <div id='VideosContainer' className='profile-container'>
              <div className='video-row'>
                <div className='video-element'>
                 <Link to='/add-video'>
                  <button className='button'>Add Video</button>
                  </Link> 
                </div>
              </div>
              <br/>
               { video_print }
            </div>
        </div>
    )
}

export default ProfileVideosDetails
