import {base_api_route , jwt_api_secret_key} from '../../config';
import { useEffect,useState } from 'react';
import ReactPlayer from 'react-player';

const LiveStreamZone = () => {
    const [openStreams, setOpenStreams] = useState([]);

    const fetchStreams = async () => {
       let response = await fetch(`${base_api_route}/stream`,{
           method : "GET",
           headers : {
               "Authorization" : `Bearer ${jwt_api_secret_key}` 
           }
       }).catch((e) => {console.log(e);});
       if(response.ok){
         return response.json();
       }
    };
     
    useEffect(()=>{
     fetchStreams().then((streams) => {
     if(streams){
        setOpenStreams(streams);
     }    
     });
    },[]);

    let streamZoneContent;
    if(openStreams.length == 0){
        streamZoneContent = (
        <h2>No streams are currently up !</h2>);
    }  else {
        let streamArray = (openStreams.length == 1 ) ? openStreams[0] : openStreams;
        streamZoneContent = (<ReactPlayer  url={streamArray} width="100%" height="100%" controls={true} />);    
    }

    return (
        <div className='LiveStreamZone'>
               {streamZoneContent}
        </div>
    )
}

export default LiveStreamZone
