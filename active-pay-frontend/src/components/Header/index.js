import React from 'react'
//import { CgProfile } from "react-icons/Cg";
import { CgUser } from "react-icons/cg";

const Header = () => {
  return (
    <nav className='nav'>
      {/* <div className='Activepaylogo'></div> */}
      <a href = "/" className='Logo'>Active Pay</a>
      <input className='Search' type="text" placeholder="Search.."></input>
      <ul>
        <li>
            <b className='logopic'>
            <CgUser /></b>&nbsp;
            <a href="/signin">SIGN IN</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
