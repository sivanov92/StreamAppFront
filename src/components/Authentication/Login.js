
const Login = () => {
    return (
        <div  id='LoginContainer'>
            <form className='form'>
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
