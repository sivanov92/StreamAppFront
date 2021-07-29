import {base_api_route , jwt_api_secret_key} from '../../config';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const UpdateVideo = ({setMessage}) => {
  const [willRedirect, setWillRedirect] = useState(false)

  var videoID = new URL(window.location.href).searchParams.get('id');
  const updateVideo = async(event)=>{
    event.preventDefault();  
    let title = event.target.title.value;

    setMessage({
      content: 'Updating a video !',
      type : 'progress' 
     });

    //Make POST Request
    let response = await fetch(base_api_route+'/videos/'+videoID,{
      method:'PUT',
      headers:{
        "Content-type":"application/json",
        'Authorization':`Bearer ${jwt_api_secret_key}`
      },
      body:JSON.stringify({
        title:title
      })
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
        content: 'Successfully updated a video !',
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
