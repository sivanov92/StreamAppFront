import { Redirect } from "react-router-dom";

const Logout = ({ setUserData , setMessage }) => {
    setUserData(false);
    window.localStorage.setItem('logged_user', false);
    setMessage({
        content: 'Logged out !',
        type : 'success' 
       });
    return ( <Redirect to="/login"/> );        
}

export default Logout;
