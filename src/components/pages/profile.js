import React from 'react';
import  NavigationBar  from '../NavigationBar';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ProfileStreamDetails from '../ProfileDetails/ProfileStreamDetails';
import ProfileVideosDetails from '../ProfileDetails/ProfileVideosDetails';

const Profile = () => {
    return (
        <div>
         <NavigationBar/>
         <ProfileDetails/>
        <ProfileStreamDetails/>
        <ProfileVideosDetails/>
        </div>
    )
};

export default Profile;
