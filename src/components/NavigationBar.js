
function NavigationBar({openProfile,openLogin,openRegister,openHome}) {
    return (
      <div className='Nav'>
        <div className='NavItems' id='HomeLink' onClick={openHome}>
		  <h1>
			Stan Stream
		  </h1>
		</div>
		<div className='NavItems' id='NavGap'>

		</div>
		<div className='NavItems' id='ProfileLink' >
			<div className='DropDown'>
              <h3> Profile</h3>
			  <div className='DropDown-content'>
               <div className='dd-elements' onClick={openLogin}>
			   <h4> Login</h4>
			   </div>
			   <div className='dd-elements' onClick={openRegister}>
			    <h4> Register</h4>
			   </div>
			   <div className='dd-elements' onClick={openProfile}>
			    <h4> Profile</h4>
			   </div>
			  </div>
			</div>
		</div>
      </div>
    );
  }
  
  export default NavigationBar;
  