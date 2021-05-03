import {base_api_route , jwt_api_secret_key} from '../../config'

var jwt = require('jsonwebtoken')

const Register = () => {
    let jwt_token
    jwt.sign({ foo: 'bar' }, jwt_api_secret_key, { algorithm: 'RS256' }, function(err, token) {
       jwt_token = token
      });//Use later    

    const registerUser = async(event)=>{
       event.preventDefault();
       let login_data = {
        'firstName': `${event.target.firstName.value}`,
        'lastName': `${event.target.lastName.value}`,
        'email':    `${event.target.email.value}`,
        'password':  `${event.target.password.value}`
       }; 
       let register_endpoint = base_api_route+'/users/register';
       let response = await fetch(register_endpoint,{
           method:'POST',
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify(login_data)
       }).catch((e)=> {console.log(e);});        
    }

    return (
        <div id='RegisterContainer' >
            <form className='form' method='POST' onSubmit={(event) => registerUser(event)}>
                <div className='form-elements'>
                <label htmlFor="firstName">First name :</label>
                <input type='text' name='firstName' id='firstName'  />
                </div>
                <div className='form-elements'>
                <label htmlFor="lastName">Last name :</label>
                <input type='text' name='lastName' id='lastName'  />
                </div>
                <div className='form-elements'>
                <label htmlFor="email">Email</label>
                <input type='text' name='email' id='email'  />
                </div>
                <div className='form-elements'>
                <label htmlFor="password">Password</label>
                <input type='text' name='password' id='password' />
                <br/>
                <input type='submit' name='submit' value='Register' className='button submit'/>
                </div>
            </form>
        </div>
    )
}

export default Register
