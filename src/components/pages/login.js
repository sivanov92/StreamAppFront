import React from 'react';
import LoginForm from '../Authentication/LoginForm';
import NavigationBar from '../NavigationBar';

const Login = () => {
    return (
        <div className='login-page'>
            <NavigationBar/>
            <LoginForm/>
        </div>
    )
}

export default Login
