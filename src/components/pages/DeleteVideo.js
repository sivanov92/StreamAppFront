import {base_api_route } from '../../config';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const DeleteVideo = ({setMessage}) => {
  const [willRedirect, setWillRedirect] = useState(false)
  var videoID = new URL(window.location.href).searchParams.get('id');

    const deleteVideo = async(event)=>{
        event.preventDefault();

        let message_data = {
          content: 'Deleting video',
          status : 'message-in-progress'
        };
        setMessage(message_data);
    
        let response = await fetch(base_api_route+'/videos/'+videoID,{
            method:'DELETE'
        }).catch((e)=>{
          
          let message_data_failed = {
            content: e,
            status : 'message-failed'
          };
          setMessage(message_data_failed);

          console.log(e);
        });
        if(response.ok){
          setWillRedirect(true);

          let message_data_success = {
            content: 'Successfully deleted a video',
            status : 'message-success'
          };
          setMessage(message_data_success);
      
        }
      };
      if( willRedirect ){
        return ( <Redirect to="/profile"/> );        
    }
  
    return (
        <div>
            <div className='central'>
            <form className='form'  onSubmit={(event)=>deleteVideo(event)}>
              <div className='form-elements'>
                <h2>Delete video #{videoID}</h2>
              </div>
              <br/>
                <div className='form-elements'>
                  <input type='submit' value='Delete' className='button submit'/>
                </div>
              </form>
            </div>
        </div>
    );
}

export default DeleteVideo;
