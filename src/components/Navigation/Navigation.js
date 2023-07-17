import React from'react';
import Logo from '../Logo/Logo';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navbar'>
      {/*<p className='logo'>Company Logo</p> */}
      <Logo className='logo'/>
      <p className='signout-button'>Sign out</p>
    </nav>
  )
}

export default Navigation;