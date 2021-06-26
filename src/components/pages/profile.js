import { useState,useEffect } from 'react';
import  NavigationBar  from '../NavigationBar';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ProfileStreamDetails from '../ProfileDetails/ProfileStreamDetails';
import ProfileVideosDetails from '../ProfileDetails/ProfileVideosDetails';
import {base_api_route } from '../../config';
import VideoDetailsRow from '../ProfileDetails/VideoDetailsRow';

const Profile = ({userData,setUserData}) => {

  const [videos, setVideos] = useState([]);
    const getVideos = async()=>{
        let response = await fetch(base_api_route+'/videos/author/'+userData.id);
        if(response.ok){
          return await response.json();
        }
      }

    useEffect(()=>{
      getVideos().then(result => {
        let video_print = [];   
        for(let element of result){
          video_print.push(<VideoDetailsRow id={element.id} title={element.title} 
                     updated_at={element.updatedAt} video_url={element.file}
                     key={element.title}/>);
          }  
          setVideos(video_print); 
      });
    },[]); 
      
     var video_print;
     if(videos.length === 0 ){
         video_print = 'No videos found';
     } else {
         video_print = videos;
     }

    return (
        <div>
         <NavigationBar/>
         <ProfileDetails userData = {userData}/>
        <ProfileStreamDetails userData = {userData} setUserData = { setUserData }/>
        <ProfileVideosDetails print={video_print} limit={4}/>
        </div>
    )
};

export default Profile;
