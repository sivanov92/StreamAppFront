import React from 'react';
import LoginForm from '../Authentication/LoginForm';
import NavigationBar from '../NavigationBar';

const Login = ({setUserData,setMessage}) => {
    return (
        <div className='login-page'>
            <LoginForm setUserData={setUserData} setMessage={setMessage}/>
        </div>
    )
}

export default Login
