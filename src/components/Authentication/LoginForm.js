import {base_api_route , jwt_api_secret_key} from '../../config';
import { useCookies } from 'react-cookie';
import { Redirect } from "react-router-dom";
import { useState } from 'react';

//var jwt = require('jsonwebtoken');

const LoginForm = ({setUserData,setMessage}) => {
    const [cookies, setCookie] = useCookies(['logged_user']);
    const [willRedirect, setWillRedirect] = useState(false)

    const storage = window.localStorage;
    //let jwt_token;

   /* jwt.sign({ foo: 'bar' }, jwt_api_secret_key, { algorithm: 'RS256' }, function(err, token) {
         jwt_token = token;
      });*/

    const loginUser = async(event)=>{
        event.preventDefault();   

        let login_data = {
            'email': `${event.target.email.value}`,
            'password': `${event.target.password.value}`
        } 

        let message_data = {
            content: 'Processing user login !',
            status : 'message-in-progress'
          };
          setMessage(message_data);
   
       let response = await fetch(base_api_route+'/users/login',{
           method:'POST',
           headers:{
            'Content-Type': 'application/json',
           },
           body:JSON.stringify(login_data)
       }).catch((e) => {
           console.log(e);
           let message_data_failed = {
            content: e,
            status : 'message-failed'
          };
          setMessage(message_data_failed);
        });
        let res = await response.json();
        if(response.ok){
           setUserData({
               id:res.id,
               firstName:res.firstName,
               lastName:res.lastName,
               StreamKey:res.StreamKey,
               email:res.email
           });
           setCookie('logged_user',{
               "id":res.id,
               "firstName":res.firstName,
               "lastName":res.lastName
           },{
               path:'/',
               maxAge: 15*60 //15 mins
           });
          setWillRedirect(true);
          storage.setItem('logged_user',JSON.stringify({
            id:res.id,
            firstName:res.firstName,
            lastName:res.lastName,
            StreamKey:res.StreamKey,
            email:res.email
        }));

        let message_data_success = {
            content: 'Successfull user login !',
            status : 'message-success'
          };
          setMessage(message_data_success);
        } else {
            let message_data_failed = {
                content: 'Failed user login !',
                status : 'message-failed'
              };
              setMessage(message_data_failed);
    
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
