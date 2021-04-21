import React from 'react'

const ProfileStreamDetails = () => {
    const handleChange = ()=>{
        
    }
    const handleSubmit = ()=>{

    }
    return (
        <div className='profile-elements'>
            <div id='StreamContainer'>
            <h3>Stream Key Details</h3>
             <form  method='POST' onSubmit={handleSubmit}>
               <div className='form-container'>  
                 <input type='text' value='nshsh718s' className='text-input m-auto' onChange={handleChange}/>
                 <input type='submit' value='Change' className='button-input btn btn-primary m-auto'/>
               </div>  
             </form>
            </div>
        </div>
    )
}

export default ProfileStreamDetails
