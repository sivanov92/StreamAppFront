import React from 'react'
import Profile from './Profile'
import Login from './Authentication/Login'
import Register from './Authentication/Register'

const ProfileAndAuth = ({mode}) => {
    let display_container
    switch (mode) {
        case 0:
            display_container = <Profile/>
            break;
        case 1:
            display_container = <Login/>
            break;
        case 2:
            display_container = <Register/>
            break;
        default:
            break;
    }
    return (
        <div className='ProfileBaseContainer'>
            {display_container}
        </div>
    )
}

export default ProfileAndAuth
