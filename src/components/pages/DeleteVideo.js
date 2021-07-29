import {base_api_route,jwt_api_secret_key } from '../../config';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const DeleteVideo = ({setMessage}) => {
  const [willRedirect, setWillRedirect] = useState(false)
  var videoID = new URL(window.location.href).searchParams.get('id');

    const deleteVideo = async(event)=>{
        event.preventDefault();

        setMessage({
          content: 'Deleting a video !',
          type : 'progress' 
         });
  
        let response = await fetch(base_api_route+'/videos/'+videoID,{
            method:'DELETE',
            headers : {
              'Authorization':`Bearer ${jwt_api_secret_key}`
            }
        }).catch((e)=>{
          
          setMessage({
            content: e,
            type : 'fail' 
           });

          console.log(e);
        });

        let res = await response.json();

        if(response.ok){
          if(res.error){
            setMessage({
                content: res.error ,
                type : 'fail' 
               });
            return;
           } 

          setWillRedirect(true);

          setMessage({
            content: 'Successfully deleted a video !',
            type : 'success' 
           });
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
