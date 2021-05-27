import {base_api_route , jwt_api_secret_key} from '../../config';
import { useState } from 'react';
var jwt = require('jsonwebtoken');

const LoginForm = () => {
    let jwt_token;
    let userObj = {
        "id":"",
        "firstName":'',
        "lastName":''
    };
    const [userData , setUserData ] = useState(userObj);
    jwt.sign({ foo: 'bar' }, jwt_api_secret_key, { algorithm: 'RS256' }, function(err, token) {
         jwt_token = token;
      });

    const loginUser = async(event)=>{
     event.preventDefault();   
    let login_data = {
            'email': `${event.target.email.value}`,
            'password': `${event.target.password.value}`
        } 
    
       let response = await fetch(base_api_route+'/users/login',{
           method:'POST',
           headers:{
            'Content-Type': 'application/json',
           },
           body:JSON.stringify(login_data)
       }).catch((e) => {console.log(e);});
        let res = await response.json();
        if(response.status === 200){
           setUserData({
               "id":res.id,
               'firstName':res.firstName,
               'lastName':res.lastName
           });
        }
    }
    return (
        <div  className='central'>
            <form className='form' onSubmit={(event) => loginUser(event)}>
                <div className='form-elements'>
                <label htmlFor="emailField">Email</label>
                <input type='text' name='email' id='emailField'/>
                </div>
                <div className='form-elements'>
                <label htmlFor="passwordField">Password</label>
                <input type='text' name='password' id='passwordField'/>
                <br/>
                <input type='submit' name='submit' value='Login' className='button submit'/>
                </div>
            </form>
        </div>   
         )
}

export default LoginForm
