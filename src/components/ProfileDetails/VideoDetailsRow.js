import {
    Link
  } from "react-router-dom";
  
const VideoDetailsRow = ({id,title,updated_at,video_url,video_uid}) => {
    return (
        <div className='video-row'>

         <div className='video-element'>
          {id}
        </div>

        <div className='video-element'>
         {title}
        </div>

        <div className='video-element'>
         {updated_at}
        </div>

        <div className='video-element'>
         {video_url}
        </div>
        <div className='video-element'>
          <Link to={"/update-video?video-uid="+video_uid}>
            <button className='button'>Update Video</button>
          </Link>  
          </div>
          <div className='video-element'>
          <Link to={'/delete-video?video_uid='+video_uid}>
            <button type='submit' className='button'>Delete Video</button>
          </Link>  
          </div>
        </div>    
        );
}

export default VideoDetailsRow;
