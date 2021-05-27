import {
    Link
  } from "react-router-dom";
  
const ProfileDetails = () => {
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
                 <div className='general-profile-data'> Stan</div>
                 <div className='general-profile-data'> Ivanov</div>
                 <div className='general-profile-data'> test@test.eu</div>
              </div>
              </div>
              <div className='general-row general-row-button'>
                <Link to='update-profile'>
                   <button className='button'>Edit</button>
                </Link>
              </div>
            </div>
        </div>    
    )
}

export default ProfileDetails
