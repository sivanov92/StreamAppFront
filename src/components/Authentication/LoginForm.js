import {base_api_route , jwt_api_secret_key} from '../../config';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const LoginForm = ({setUserData,setMessage}) => {
    const [willRedirect, setWillRedirect] = useState(false)

    const storage = window.localStorage;

    const loginUser = async(event)=>{
        event.preventDefault();   

        let login_data = {
            'email': `${event.target.email.value}`,
            'password': `${event.target.password.value}`
        } 
          setMessage({
           content: 'Processing user login !',
           type : 'progress' 
          });
   
       let response = await fetch(base_api_route+'/users/login',{
           method:'POST',
           headers:{
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${jwt_api_secret_key}`
           },
           body:JSON.stringify(login_data)
       }).catch((e) => {
           console.log(e);
          setMessage({
            content: e,
            type : 'fail' 
           });        
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
           setUserData({
               id:res.id,
               firstName:res.firstName,
               lastName:res.lastName,
               StreamKey:res.StreamKey,
               email:res.email
           });

          setWillRedirect(true);
          storage.setItem('logged_user',JSON.stringify({
            id:res.id,
            firstName:res.firstName,
            lastName:res.lastName,
            StreamKey:res.StreamKey,
            email:res.email
        }));

          setMessage({
            content: 'Successfull user login !',
            type : 'success' 
           });
         }
    }
    if( willRedirect ){
        return ( <Redirect to="/profile"/> );        
    }
    return (
        <div  className='central'>
            <form className='form' onSubmit={(event) => loginUser(event)}>
                <div className='form-elements'>
                <label htmlFor="emailField">Email</label>
                <input type='text' name='email' id='emailField' required/>
                </div>
                <div className='form-elements'>
                <label htmlFor="passwordField">Password</label>
                <input type='password' name='password' id='passwordField' required/>
                <br/>
                <input type='submit' name='submit' value='Login' className='button submit'/>
                </div>
            </form>
        </div>   
         )
}

export default LoginForm
