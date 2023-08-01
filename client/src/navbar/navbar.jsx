// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Notifications from './notification';

const Navbar = () => {
const navigate= useNavigate();
 const logout =(e) =>{
  e.preventDefault();
  localStorage.removeItem('token');
  navigate('/login');
 }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/posts">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/createpost">Create Post</Link>
        </li>

        <li className="nav-item">
          <button onClick={logout}>logout</button>
        </li>
        <li className="nav-item">
        
                    
                            <Popup trigger={<a className="nav-link">
                                Notifications
                            </a>}
                                position="bottom center">
                                <Notifications />
                            </Popup>
                    
                
        </li>
        {/* Add other navigation items here */}
      </ul>
    </nav>
  );
};


export default Navbar;
