// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/posts">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/createpost">Create Post</Link>
        </li>
        {/* Add other navigation items here */}
      </ul>
    </nav>
  );
};

export default Navbar;
