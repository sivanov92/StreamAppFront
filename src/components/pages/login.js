import React from 'react';
import LoginForm from '../Authentication/LoginForm';
import NavigationBar from '../NavigationBar';

const Login = ({setUserData}) => {
    return (
        <div className='login-page'>
            <LoginForm setUserData={setUserData}/>
        </div>
    )
}

export default Login
