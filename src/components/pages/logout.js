import { useCookies } from 'react-cookie';
import { Redirect } from "react-router-dom";

const Logout = () => {
    const [cookies, setCookie,removeCookie] = useCookies(['logged_user']);
    removeCookie('logged_user');
    return ( <Redirect to="/"/> );        
}

export default Logout;
