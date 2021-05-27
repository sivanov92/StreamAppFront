import React from 'react';
import RegisterForm from '../Authentication/RegisterForm';
import NavigationBar from '../NavigationBar';

const Register = () => {
    return (
        <div className='register-page'>
            <NavigationBar/>
            <RegisterForm/>
        </div>
    )
}

export default Register
