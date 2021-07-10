import { useState,useEffect } from 'react';
import  NavigationBar  from '../NavigationBar';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ProfileStreamDetails from '../ProfileDetails/ProfileStreamDetails';
import ProfileVideosDetails from '../ProfileDetails/ProfileVideosDetails';
import {base_api_route } from '../../config';
import VideoDetailsRow from '../ProfileDetails/VideoDetailsRow';
import {
  Link
} from "react-router-dom";

const Profile = ({userData,setUserData}) => {

  const PAGE_LIMIT = 4;

  var current_page = new URL(window.location.href).searchParams.get('page');
  if(!current_page){
    current_page = 1;
  }

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
      
     var video_print = [];
     var pages_print = [];

     if(videos.length === 0 ){
         video_print = 'No videos found';
     } else {
    
      let pages = Math.ceil(videos.length/PAGE_LIMIT);
  
      for(let i = 1;i<=pages;i++){
      
        let disabled_style = '';
        if(i == current_page){
          disabled_style = 'disabled-page';
        }  
  
        pages_print.push(
         <Link to={`/profile?page=${i}`} key={`link to page ${i}`}>
                <button className={`pages button ${disabled_style}`} key={`page ${i}`}>{ i }</button>
         </Link>
         );
      }

        let page_start =  (current_page-1) * PAGE_LIMIT;
        
        for(let i = page_start; i < page_start + PAGE_LIMIT ; i++){
          video_print.push(videos[i]);
        } 
     }

    return (
        <div>
         <ProfileDetails userData = {userData}/>
        <ProfileStreamDetails userData = {userData} setUserData = { setUserData }/>
        <ProfileVideosDetails print={video_print} pages_print={pages_print}/>
        </div>
    )
};

export default Profile;
