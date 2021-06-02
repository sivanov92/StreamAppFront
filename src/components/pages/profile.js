import React from 'react';
import  NavigationBar  from '../NavigationBar';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ProfileStreamDetails from '../ProfileDetails/ProfileStreamDetails';
import ProfileVideosDetails from '../ProfileDetails/ProfileVideosDetails';

const Profile = ({userData,setUserData}) => {
    return (
        <div>
         <NavigationBar/>
         <ProfileDetails userData = {userData}/>
        <ProfileStreamDetails userData = {userData} setUserData = { setUserData }/>
        <ProfileVideosDetails userData = {userData}/>
        </div>
    )
};

export default Profile;
