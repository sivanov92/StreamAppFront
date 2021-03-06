import {base_api_route,jwt_api_secret_key } from '../../config';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const AddVideo = ({userData,setMessage}) => {
  const [willRedirect, setWillRedirect] = useState(false)

    const createVideo = async(event)=>{
       event.preventDefault();  
       
       setMessage({
        content: 'Adding a new video !',
        type : 'progress' 
       });

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
         body:formData,
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
        setMessage({
          content: 'Successfully added a new video !',
          type : 'success' 
         });

        setWillRedirect(true);
      } 
    };
    if( willRedirect ){
      return ( <Redirect to="/profile"/> );        
  }
    return (
        <div>
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
