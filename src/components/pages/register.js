import React from 'react';
import RegisterForm from '../Authentication/RegisterForm';
import NavigationBar from '../NavigationBar';

const Register = ({setUserData,setMessage}) => {
    return (
        <div className='register-page'>
            <RegisterForm setUserData={setUserData} setMessage={setMessage}/>
        </div>
    )
}

export default Register
