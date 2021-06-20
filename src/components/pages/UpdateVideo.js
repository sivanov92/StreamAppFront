import  NavigationBar  from '../NavigationBar';
import {base_api_route } from '../../config';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const UpdateVideo = () => {
  const [willRedirect, setWillRedirect] = useState(false)

  var videoID = new URL(window.location.href).searchParams.get('id');
  const updateVideo = async(event)=>{
    event.preventDefault();  
    let title = event.target.title.value;

    //Make POST Request
    let response = await fetch(base_api_route+'/videos/'+videoID,{
      method:'PUT',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        title:title
      })
    }).catch((e)=>console.log(e));
    if(response.status === 200){
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
              <form className='form' onSubmit={(event)=>updateVideo(event)}>
               <div className='form-elements'>
                <h2>Update Video #{videoID}</h2>
               </div>
                <div className='form-elements'>
                  <label htmlFor='title'>
                    Title
                  </label>
                  <input type='text' name='title' required/>
                </div>
                <div className='form-elements'>
                  <br/>
                  <input type='submit' value='Update' className='button submit'/>
                </div>
              </form>
            </div>
        </div>
    )
}

export default UpdateVideo
