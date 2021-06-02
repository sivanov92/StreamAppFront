import {base_api_route } from '../../config';
import { useCookies } from 'react-cookie';

const ProfileStreamDetails = ({userData,setUserData}) => {
  const [cookies, setCookie] = useCookies(['logged_user']);

  var userID ;
  var streamKey;

  if(cookies.logged_user !== undefined){
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
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          StreamKey:newKey
        })
      });
      let res = await response.json();
      if(response.status === 200 ){
        setUserData({
          id:res.id,
          firstName:res.firstName,
          lastName:res.lastName,
          StreamKey:res.StreamKey,
          email:res.email
      });

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
