import {base_api_route , jwt_api_secret_key} from '../../config'
import { Redirect } from "react-router-dom";
import { useState } from 'react';
import { useCookies } from 'react-cookie';

//var jwt = require('jsonwebtoken')

const RegisterForm = ({setUserData}) => {
    const [willRedirect, setWillRedirect] = useState(false)
    const [cookies, setCookie] = useCookies(['logged_user']);

  /*  let jwt_token
    jwt.sign({ foo: 'bar' }, jwt_api_secret_key, { algorithm: 'RS256' }, function(err, token) {
       jwt_token = token
      });//Use later    
      */
    const registerUser = async(event)=>{
       event.preventDefault();
       let login_data = {
        'firstName': `${event.target.firstName.value}`,
        'lastName': `${event.target.lastName.value}`,
        'email':    `${event.target.email.value}`,
        'password':  `${event.target.password.value}`
       }; 
       let register_endpoint = base_api_route+'/users/register';
       let response = await fetch(register_endpoint,{
           method:'POST',
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify(login_data)
       }).catch((e)=> {console.log(e);}); 
       let res =await response.json();
       if(response.status === 201){
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
            path:'/'
        });
         setWillRedirect(true);
       }
    }
    if( willRedirect ){
        return ( <Redirect to="/profile"/> );        
    }

    return (
        <div className='central' >
            <form className='form' method='POST' onSubmit={(event) => registerUser(event)}>
                <div className='form-elements'>
                <label htmlFor="firstName">First name :</label>
                <input type='text' name='firstName' id='firstName'  required/>
                </div>
                <div className='form-elements'>
                <label htmlFor="lastName">Last name :</label>
                <input type='text' name='lastName' id='lastName'  required/>
                </div>
                <div className='form-elements'>
                <label htmlFor="email">Email</label>
                <input type='text' name='email' id='email'  required/>
                </div>
                <div className='form-elements'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' required/>
                <br/>
                <input type='submit' name='submit' value='Register' className='button submit'/>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
