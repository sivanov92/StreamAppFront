import {
	Link
  } from "react-router-dom";
import { useCookies } from 'react-cookie';
import NavLink from './NavLink';

function NavigationBar() {
	const [cookies, setCookie] = useCookies(['logged_user']);
	var isLogged = false;
	var userNameForShow ;
	var profileHeader = 'Profile';
	if(cookies.logged_user !== undefined){
		isLogged = true;
		userNameForShow = cookies.logged_user.firstName.charAt(0)+'.'+cookies.logged_user.lastName;
		profileHeader = userNameForShow;
	}
	let Links = [];
	if(isLogged){
		Links.push(<NavLink url='/profile' header='Profile' key='profile'/>);
		Links.push(<NavLink url='/logout' header='Logout' key='logout'/>);
	} else {
		Links.push(<NavLink url='/login' header='Login' key='login'/>);
		Links.push(<NavLink url='/register' header='Register' key='register'/>);
	}

    return (
      <div className='Nav'>
		<Link to='/'>
            <div className='NavItems' id='HomeLink' >
		     <h1>
		    	Stan Stream
		     </h1>
	    	</div>
		</Link>
		<div className='NavItems' id='NavGap'>

		</div>
		<div className='NavItems'>
			<div className='DropDown'>
			 <div className='ProfileNav'>
			   <h2>{profileHeader}</h2>
			</div>	
			    	  
			  <div className='DropDown-content'>
			  { Links }
			  </div>
			</div>
		</div>
      </div>
    );
  }
  
  export default NavigationBar;
  