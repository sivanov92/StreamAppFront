import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
  

function NavigationBar() {
    return (
		<Router forceRefresh={true}>
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
			   <h2>Profile</h2>
			</div>	
			    	  
			  <div className='DropDown-content'>
			  <Link to='/login'>
               <div className='dd-elements'>
			   <h3> Login</h3>
			   </div>
			   </Link>
			   <Link to='/register'>
			   <div className='dd-elements' >
			    <h3> Register</h3>
			   </div>
			   </Link>
			   <Link to='/profile'>
			   <div className='dd-elements' >
			    <h3> Profile</h3>
			   </div>
			   </Link>
			   <Link to='/logout'>
			   <div className='dd-elements' >
			    <h3>LogOut</h3>
			   </div>
			   </Link>
			  </div>
			</div>
		</div>
      </div>
	  </Router>
    );
  }
  
  export default NavigationBar;
  