import  NavigationBar  from '../NavigationBar';
import {base_api_route } from '../../config';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const AddVideo = ({userData}) => {
  const [willRedirect, setWillRedirect] = useState(false)

    const createVideo = async(event)=>{
       event.preventDefault();  
        
       let title = event.target.title.value;
       let file = event.target.file.files[0];
       let author = userData.id;

       let formData = new FormData();
       formData.append("title",title);
       formData.append('author',author);
       formData.append('file',file);
       //Make POST Request
       let response = await fetch(base_api_route+'/videos',{
         method:'POST',
         body:formData
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
              <form className='form' encType="multipart/form-data" onSubmit={(event)=>createVideo(event)}>
                <div className='form-elements'>
                  <label htmlFor='title'>
                    Title
                  </label>
                  <input type='text' name='title' required/>
                </div>
                <div className='form-elements'>
                  <br/>
                  <input type='file' name='file' required/>
                  <br/>
                  <input type='submit' value='Add' className='button submit'/>
                </div>
              </form>
            </div>
        </div>
    )
}

export default AddVideo
