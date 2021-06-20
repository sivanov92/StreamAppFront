import {base_api_route } from '../../config';
import  NavigationBar  from '../NavigationBar';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const DeleteVideo = () => {
  const [willRedirect, setWillRedirect] = useState(false)
  var videoID = new URL(window.location.href).searchParams.get('id');

    const deleteVideo = async(event)=>{
        event.preventDefault();
        let response = await fetch(base_api_route+'/videos/'+videoID,{
            method:'DELETE'
        }).catch((e)=>console.log(e));
        if(response.ok){
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
