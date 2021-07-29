import VideoPlayer from './VideoPlayer'
import {base_api_route } from '../../config';
import { useState,useEffect } from 'react';
import { jwt_api_secret_key  } from '../../config';

const VideoListingZone = ({header}) => {
    var Containers = [];
    const PLAYERS = 4;

    const [StreamWindows, setStreamWindows] = useState(PLAYERS);
    const [showLabel, setShowLabel] = useState("");
    const [videos, setVideos] = useState(false);

    const fetchVideos = async()=>{
      let response = await fetch(base_api_route+'/videos',{
        method:'GET',
        headers:{
          'Content-type' : "application/json",
          'Authorization':`Bearer ${jwt_api_secret_key}`
        }
      })
       .catch((e)=>{console.log(e);});
      if(response.ok){
        return await response.json();                    
      }                     
    };

    const showMoreLess = ()=>{

      if(StreamWindows > PLAYERS){
        setStreamWindows(PLAYERS);
        setShowLabel('Show Less');
        return;
      }

      setStreamWindows(Math.ceil(videos.length/PLAYERS) * PLAYERS);
      setShowLabel('Show More');

    }

    useEffect(()=>{

        fetchVideos().then(result => {
            setVideos(result);
            if(videos.length > PLAYERS){
              setShowLabel('Show More');
              return;
            }
      })
        .catch((e)=>{
            console.log(e);
        });  

    },[]);
  
  if(videos !== undefined){  
    if(videos.length > 0){
      for(let i = 0;i<StreamWindows;i++){
        if(i < videos.length){
          Containers.push(<VideoPlayer key={i} url={videos[i].file} videoData={videos} useAsPlaceholder={false}/>)
        }  else {
         Containers.push(<VideoPlayer key={i} useAsPlaceholder={true}/>)
        }
     }
    }
  }

    return (
        <div className='VideoListingZone'>
            <br/>
            <h3 style={{display:'inline'}}>{header}</h3>
            <div className='VideoListing'>
             {Containers}
            </div>
            <h3 className='show-label' onClick={showMoreLess}>{showLabel}</h3>
        </div>
    )
}

export default VideoListingZone
