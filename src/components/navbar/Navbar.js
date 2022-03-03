import React from 'react'
import "../../allcss.css"
import Logo from "../../assets/navbar/navbar-logo.svg";

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-inner-wrap'>
      <div className='navbar-logo'>
        <img src={Logo} alt=""></img>
      </div>
      <div className='navbar-content'>
      <div className='signin-div'><p>Sign In</p></div>
      <div className='pc-div'>
       <p> Dukaan for PC</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar