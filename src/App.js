import  Home  from './components/pages/home';
import  Profile  from './components/pages/profile';
import  Login  from './components/pages/login';
import  Register  from './components/pages/register';
import  AddVideo  from './components/pages/AddVideo';
import  UpdateVideo  from './components/pages/UpdateVideo';
import  DeleteVideo  from './components/pages/DeleteVideo';
import Logout from './components/pages/logout';

import {  useState,useEffect } from 'react'
import './style/style.css';
import './style/profile.css';
import './style/video_containers.css';
import './style/general_style.css';
import './style/nav.css';

import {
	Switch,
	Route
  } from "react-router-dom";

function App() {
  const stored_user = JSON.parse(window.localStorage.getItem('logged_user'));
   
   let user_def_value = (stored_user !== null)?stored_user:false;

   const [user, setUser] = useState(user_def_value);

   const setUserData = (value)=>{
      setUser(value);
   }   

  return (
    <div className="root">
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>


          <Route  path="/profile">
            <Profile userData={user} setUserData={setUserData}/>
          </Route>

          <Route path="/login">
           <Login setUserData={setUserData}/>
          </Route>  

          <Route path="/register">
            <Register setUserData={setUserData}/>
          </Route> 

          <Route path="/add-video">
            <AddVideo userData={user}/>
          </Route>  

          <Route path="/update-video">
             <UpdateVideo userData={user}/>
          </Route>  

          <Route path="/delete-video">
              <DeleteVideo userData={user}/>
          </Route>  

          <Route path="/logout">
            <Logout setUserData={setUserData}/>
          </Route>  

      </Switch>
    </div>
  );
}

export default App;
