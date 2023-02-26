import React from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar-container">
      <li><a class = "navbar-font"> </a><Link to="/">Home</Link></li> 
      <li><a class = "navbar-font"> </a><Link to="/main">Course Diagram</Link></li> 
      <li><a class = "navbar-font"> </a><Link to="/unitsearchpage">Search Units</Link></li> 
    </div>

  )
}

export default Navbar