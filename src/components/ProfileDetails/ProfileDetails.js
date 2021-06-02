import {
    Link
  } from "react-router-dom";
  
const ProfileDetails = ({userData}) => {
    return (
        <div className='profile-elements' >
            <div id='GeneralContainer' className='profile-container'>
              <div className='general-row general-row-column'>
              <div className='general-labels general'>
                 <div className='general-profile-data'>First Name</div>
                 <div className='general-profile-data'>Last Name </div>
                 <div className='general-profile-data'>Email </div>
              </div>
              <div className='general-data general'>
                 <div className='general-profile-data'>{userData.firstName}</div>
                 <div className='general-profile-data'>{userData.lastName}</div>
                 <div className='general-profile-data'>{userData.email}</div>
              </div>
              </div>
            </div>
        </div>    
    )
}

export default ProfileDetails
