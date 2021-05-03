import  NavigationBar  from './components/NavigationBar'
import LiveStreamZone from './components/LiveStreamZone'
import SelectVideoContainer from './components/SelectVideoContainer'
import ProfileAndAuth from './components/ProfileAndAuth'

import { useState} from 'react'
import './style.css';

function App() {
  const [ IsProfile , setIsProfile] = useState(false);
  const [ IsLogin , setIsLogin] = useState(false);
  const [ IsRegister , setIsRegister] = useState(false);

  const openProfile = ()=>{
      setIsProfile(true);
      setIsLogin(false);
      setIsRegister(false);

    }
    const openLogin = ()=>{
      setIsLogin(true);
      setIsRegister(false);
      setIsProfile(false);

    }
    const openRegister = ()=>{
      setIsRegister(true);
      setIsLogin(false);
      setIsProfile(false);

    }
    const openHome = ()=>{
      setIsProfile(false)
      setIsRegister(false)
      setIsLogin(false)
    }
  let available_modes = [IsProfile,IsLogin,IsRegister]  
  let select_profile_mode = available_modes.indexOf(true)
  return (
    <div className="root">
     <NavigationBar openProfile={openProfile} openLogin={openLogin} openRegister={openRegister} openHome={openHome}/>
     {IsProfile === false && IsLogin === false && IsRegister === false ?
      [
       <LiveStreamZone/>,
       <SelectVideoContainer  key='stream' header='Live Streams'/>,
       <SelectVideoContainer key='videos' header='Uploaded Videos' />
      ]
      :
      <ProfileAndAuth mode={select_profile_mode}/>
     }
    </div>
  );
}

export default App;
