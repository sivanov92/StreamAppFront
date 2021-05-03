import {base_api_route , jwt_api_secret_key} from '../../config'
var jwt = require('jsonwebtoken')

const Login = () => {
    let jwt_token
    jwt.sign({ foo: 'bar' }, jwt_api_secret_key, { algorithm: 'RS256' }, function(err, token) {
         jwt_token = token
      });

    const loginUser = async(event)=>{
     event.preventDefault();   
    let login_data = {
            'email': `${event.target.email.value}`,
            'password': `${event.target.password.value}`
        } 
    
       let response = await fetch(base_api_route+'/users/login',{
           method:'POST',
           headers:{
            'Content-Type': 'application/json',
           },
           body:JSON.stringify(login_data)
       }).catch((e) => {console.log(e);});

       console.log(response);
    }
    return (
        <div  id='LoginContainer'>
            <form className='form' onSubmit={(event) => loginUser(event)}>
                <div className='form-elements'>
                <label htmlFor="emailField">Email</label>
                <input type='text' name='email' id='emailField'/>
                </div>
                <div className='form-elements'>
                <label htmlFor="passwordField">Password</label>
                <input type='text' name='password' id='passwordField'/>
                <br/>
                <input type='submit' name='submit' value='Register' className='button submit'/>
                </div>
            </form>
        </div>   
         )
}

export default Login
