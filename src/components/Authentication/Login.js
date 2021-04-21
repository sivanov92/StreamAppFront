import {base_api_route , jwt_api_secret_key} from '../../config'
var jwt = require('jsonwebtoken')

const Login = () => {
    let jwt_token
    jwt.sign({ foo: 'bar' }, jwt_api_secret_key, { algorithm: 'RS256' }, function(err, token) {
         jwt_token = token
      });

    let login_data = {
        'email':'email',
        'password':'password'
    } // CHANGE VALUES LATER

    const loginUser = async()=>{
       let response = await fetch(base_api_route+'/login',{
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
        // LOGIN LOGIC
       }else{
           return false
       }
    }
    return (
        <div  id='LoginContainer'>
            <form className='form' onSubmit={loginUser}>
                <div className='form-elements'>
                <label for="emailField">Email</label>
                <input type='text' name='email' id='emailField'/>
                </div>
                <div className='form-elements'>
                <label for="passwordField">Password</label>
                <input type='text' name='password' id='passwordField'/>
                <br/>
                <input type='submit' name='submit' value='Register' className='button submit'/>
                </div>
            </form>
        </div>   
         )
}

export default Login
