import {
	Link
  } from "react-router-dom";
import NavLink from './NavLink';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';

function NavigationBar({userData}) {
	var isLogged = false;
	var userNameForShow ;
	var profileHeader = 'Profile';
	if(userData){
		isLogged = true;
		userNameForShow = userData.firstName.charAt(0).toLowerCase()+'.'+userData.lastName.toLowerCase();
		profileHeader = userNameForShow;
	}
	let Links = [];
	if(isLogged){
		Links.push(<NavLink url='/profile' header='Profile' key='profile' icon={<PermIdentityIcon/>}/>);
		Links.push(<NavLink url='/logout' header='Logout' key='logout' icon={<ExitToAppIcon/>}/>);
	} else {
		Links.push(<NavLink url='/login' header='Login' key='login' icon={<LockOpenTwoToneIcon/>}/>);
		Links.push(<NavLink url='/register' header='Register' key='register' icon={<VpnKeyIcon/>}/>);
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
  