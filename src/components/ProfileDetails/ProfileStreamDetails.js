import { useState } from 'react'

const ProfileStreamDetails = () => {
    const handleChange = ()=>{
        
    }
    const handleSubmit = ()=>{

    }
    return (
        <div className='profile-elements'>
            <div id='StreamContainer' className='profile-container'>
            <div className='form-container'>
              <h3>Stream Key Details</h3>
            </div>
             <form  method='POST' onSubmit={handleSubmit}>
               <div className='form-container'>  
                 <input type='text' value='nshsh718s' className='text-input m-auto' onChange={handleChange}/>
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
