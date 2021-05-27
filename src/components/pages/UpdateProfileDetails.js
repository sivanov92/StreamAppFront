import {
	BrowserRouter as Router,
	Link,
  } from "react-router-dom";
import  NavigationBar  from '../NavigationBar';

const UpdateProfileDetails = ({firstName,lastName,email}) => {
    return (
        <div>
            <NavigationBar/>
            <div className='central'>
              <form className='form'>
                <div className='form-elements'>
                  <label htmlFor='firstName'>
                    First Name
                  </label>
                  <input type='text' value={firstName} name='firstName' required/>
                </div>
                <div className='form-elements'>
                  <label htmlFor='lastName'>
                    Last Name
                  </label>
                  <input type='text' value={lastName} name='lastName' required/>
                </div>
                <div className='form-elements'>
                  <label htmlFor='email'>
                    Email
                  </label>
                  <input type='text' value={email} name='email' required/>
                </div>                
                <div className='form-elements'>
                    <br/>
                  <input type='submit'  value='Update Profile' className='button submit'/>
                </div>
              </form>
            </div>
        </div>
    )
}

export default UpdateProfileDetails
