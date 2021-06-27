import React from 'react';
import RegisterForm from '../Authentication/RegisterForm';
import NavigationBar from '../NavigationBar';

const Register = ({setUserData}) => {
    return (
        <div className='register-page'>
            <RegisterForm setUserData={setUserData}/>
        </div>
    )
}

export default Register
