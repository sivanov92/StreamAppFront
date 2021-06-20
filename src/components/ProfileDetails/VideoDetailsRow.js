import {
    Link
  } from "react-router-dom";
  
const VideoDetailsRow = ({id,title,updated_at,video_uid}) => {
    let formatted_date = new Date(updated_at).toDateString();
    return (
        <div className='video-row'>

         <div className='video-element'>
          # {id}
        </div>

        <div className='video-element'>
         {title}
        </div>

        <div className='video-element'>
         {formatted_date}
        </div>
        <div className='video-element'>
          <Link to={"/update-video?id="+id}>
            <button className='button'>Update Video</button>
          </Link>  
          </div>
          <div className='video-element'>
          <Link to={'/delete-video?id='+id}>
            <button type='submit' className='button'>Delete Video</button>
          </Link>  
          </div>
        </div>    
        );
}

export default VideoDetailsRow;
