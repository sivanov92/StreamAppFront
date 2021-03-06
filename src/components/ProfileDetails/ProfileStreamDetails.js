import {base_api_route , jwt_api_secret_key } from '../../config';

const ProfileStreamDetails = ({userData,setUserData}) => {

  var userID ;
  var streamKey;

  if(userData){
     streamKey = userData.StreamKey;
     userID = userData.id;
  }
    const handleSubmit = async(event)=>{
      event.preventDefault();
      let newKey = Math.random().toString(16).substr(2, 10);

      //Send new stream key
      let response = await fetch(base_api_route+'/users/'+userID,{
        method:'PUT',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${jwt_api_secret_key}`
        },
        body:JSON.stringify({
          StreamKey:newKey
        })
      });
      if(response.ok){
        setUserData({
          id:userData.id,
          firstName : userData.firstName,
          lastName : userData.lastName,
          email : userData.email,
          StreamKey:newKey
        });
        window.localStorage.setItem('logged_user',JSON.stringify({
          id:userData.id,
          firstName : userData.firstName,
          lastName : userData.lastName,
          email : userData.email,
          StreamKey:newKey
        }));
      }
    }
    return (
        <div className='profile-elements'>
            <div id='StreamContainer' className='profile-container'>
            <div className='form-container'>
              <h3>Stream Key Details</h3>
            </div>
             <form  method='POST' onSubmit={handleSubmit}>
               <div className='form-container'>  
                 <br/>
                 <div className='fake-input'>
                  {streamKey}
                 </div>
               </div>  
               <div className='form-container'>  
                 <input type='submit' value='Change' className='button submit'/>
               </div>  
             </form>
            </div>
        </div>
    )
}

export default ProfileStreamDetails
