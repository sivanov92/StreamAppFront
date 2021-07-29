import {base_api_route , jwt_api_secret_key} from '../../config'
import { Redirect } from "react-router-dom";
import { useState } from 'react';

const RegisterForm = ({setUserData,setMessage}) => {
    const [willRedirect, setWillRedirect] = useState(false)

    const registerUser = async(event)=>{
       event.preventDefault();

       let login_data = {
        'firstName': `${event.target.firstName.value}`,
        'lastName': `${event.target.lastName.value}`,
        'email':    `${event.target.email.value}`,
        'password':  `${event.target.password.value}`
       }; 

      setMessage({
        content: 'Processing user register !',
        type : 'progress' 
       });

       let register_endpoint = base_api_route+'/users/register';
       let response = await fetch(register_endpoint,{
           method:'POST',
           headers:{
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${jwt_api_secret_key}`
           },
           body:JSON.stringify(login_data)
       }).catch((e)=> {
           console.log(e);
           setMessage({
            content: 'Failed user registration !',
            type : 'fail' 
           });
        }); 
       let res =await response.json();
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
         
          setMessage({
            content: 'Successfull user registration !',
            type : 'success' 
           });
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
