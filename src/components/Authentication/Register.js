
const Register = () => {
    return (
        <div id='RegisterContainer' >
            <form className='form'>
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
