import  Home  from './components/pages/home';
import  Profile  from './components/pages/profile';
import  Login  from './components/pages/login';
import  Register  from './components/pages/register';
import  AddVideo  from './components/pages/AddVideo';
import  UpdateVideo  from './components/pages/UpdateVideo';
import  UpdateProfileDetails  from './components/pages/UpdateProfileDetails';

import config, {base_api_route } from './config';

import {  useEffect} from 'react'
import './style/style.css';
import './style/profile.css';
import './style/video_containers.css';
import './style/general_style.css';
import './style/nav.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
  } from "react-router-dom";

function App() {
   useEffect(()=>{
    const fetch_vids = async()=>{
      let videos = await fetch(config.base_api_route+'/videos',{
        method:"GET",
      });
      let data = await videos.json();
      console.log(data);
    };
 //  fetch_vids();
  },[]); 
  return (
    <Router>
    <div className="root">
      <Switch>
          <Route exact path="/"   component={Home}/>
          <Route  path="/profile" component={Profile}/>
          <Route path="/login"    component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/add-video" component={AddVideo}/>
          <Route path="/update-video" component={UpdateVideo}/>
          <Route path="/update-profile">
            <UpdateProfileDetails firstName='Stan' lastName='Ivanov' email='test@test.eu'/>
          </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
