import {base_api_route } from '../../config';
import  NavigationBar  from '../NavigationBar';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const DeleteVideo = () => {
  const [willRedirect, setWillRedirect] = useState(false)
  var videoUID = new URL(window.location.href).searchParams.get('video-uid');

    const deleteVideo = async(event)=>{
        //Send new stream key
        let response = await fetch(base_api_route+'/videos/'+videoUID,{
            method:'DELETE'
        }).catch((e)=>console.log(e));
        if(response.status === 200 ){
          setWillRedirect(true);
        }
      };
      if( willRedirect ){
        return ( <Redirect to="/profile"/> );        
    }
  
    return (
        <div>
             <NavigationBar/>
            <div className='central'>
            <form className='form' method='POST' onSubmit={(event)=>deleteVideo(event)}>
              <div className='form-elements'>
                <h2>Delete video #{videoUID}</h2>
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
