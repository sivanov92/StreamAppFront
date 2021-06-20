import VideoPlayer from './VideoPlayer'
import {base_api_route } from '../../config';
import { useState,useEffect } from 'react';

const VideoListingZone = ({header}) => {
    var Containers = [];

    const [StreamWindows, setStreamWindows] = useState(4);
    const [showLabel, setShowLabel] = useState("Show More");
    const [videos, setVideos] = useState(false);

    const fetchVideos = async()=>{
      let response = await fetch(base_api_route+'/videos')
                           .catch((e)=>{console.log(e);});
      if(response.ok){
        return await response.json();                    
      }                     
    };

    const showMoreLess = ()=>{

      if(StreamWindows > 4){
        setStreamWindows(4);
        setShowLabel('Show More');
        return;
      }

      setStreamWindows(Math.ceil(videos.length/4) * 4);
      setShowLabel('Show Less');

    }

    useEffect(()=>{

        fetchVideos().then(result => {
            setVideos(result);

            if(videos.length <= 4){
              setStreamWindows(4);
              setShowLabel('');
              return;
            }
      })
        .catch((e)=>{
            console.log(e);
        });  

    },[]);

    if(videos.length > 0){

      for(let i = 0;i<StreamWindows;i++){
        if(i < videos.length){
          Containers.push(<VideoPlayer key={i} url={videos[i].file} useAsPlaceholder={false}/>)
        }  else {
         Containers.push(<VideoPlayer key={i} useAsPlaceholder={true}/>)
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
