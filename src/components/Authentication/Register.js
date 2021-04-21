import {base_api_route , jwt_api_secret_key} from '../../config'
var jwt = require('jsonwebtoken')

const Register = () => {
    let jwt_token
    jwt.sign({ foo: 'bar' }, jwt_api_secret_key, { algorithm: 'RS256' }, function(err, token) {
       jwt_token = token
      });

    let login_data = {
        'firstName':'firstName',
        'lastName':'lastName',
        'email':'email',
        'password':'password'
    } // CHANGE VALUES LATER

    const registerUser = async()=>{
       let response = await fetch(base_api_route+'/register',{
           method:'POST',
           mode:'cors',
           headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt_token}` 
           },
           data:JSON.stringify(login_data)
       })
       if(response.ok){
        let res_data = await response.json()
        // Register LOGIC
       }else{
           return false
       }
    }

    return (
        <div id='RegisterContainer' >
            <form className='form' onSubmit={registerUser}>
                <div className='form-elements'>
                <label for="firstName">First name :</label>
                <input type='text' name='firstName' id='firstName'/>
                </div>
                <div className='form-elements'>
                <label for="lastName">Last name :</label>
                <input type='text' name='lastName' id='lastName'/>
                </div>
                <div className='form-elements'>
                <label for="email">Email</label>
                <input type='text' name='email' id='email'/>
                </div>
                <div className='form-elements'>
                <label for="password">Password</label>
                <input type='text' name='password' id='password'/>
                <br/>
                <input type='submit' name='submit' value='Register' className='button submit'/>
                </div>
            </form>
        </div>
    )
}

export default Register
