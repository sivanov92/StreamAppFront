import {
	Link
  } from "react-router-dom";

const NavLink = ({url,header}) => {
    return (
        <Link to={url} replace>
        <div className='dd-elements'>
        <h3>{header}</h3>
        </div>
        </Link>    
        );
}

export default NavLink
