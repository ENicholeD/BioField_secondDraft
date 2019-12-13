  
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props) {

  function clickLogout() {
    props.onLogout();
  }

  let signInOut = <Link to='/login'>Sign In</Link>;

  if (props.currentUser)
  {
    signInOut = <Link onClick={clickLogout} to='/login'>Sign Out</Link>;
  }

  var navStyle = {
    backgroundColor: '#747d5e',
    backgroundImage: "url(" + "https://www.transparenttextures.com/patterns/tree-bark.png" + ")",
    padding: '50px'
  };
  var marginLeftStyle = {
    marginLeft: '25px',
    float: 'left',
    color: 'darkgreen'
  };
  var floatingRight = {
    textAlign: 'right'
  }
  return (
    <nav style={navStyle}>
      <div className='nav-wrapper'>
        <h1><Link to='/' className='brand-logo' style={marginLeftStyle}>BioField</Link></h1> 
        <ul id='nav-mobile'>
          <div style={floatingRight}>
          <p><Link to='/create-account'>Create Account</Link></p>
          <p>{signInOut}</p>
          <p><Link to='/create'>New Journal</Link></p>
          </div>
        </ul>
      </div>
    </nav>  
  );
}

Navbar.propTypes = {
  onLogout: PropTypes.func,
  currentUser: PropTypes.number
};

export default Navbar;