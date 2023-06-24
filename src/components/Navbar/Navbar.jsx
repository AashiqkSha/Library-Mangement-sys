import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.jpg";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const {loginWithRedirect , isAuthenticated , logout} = useAuth0();

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img className='imglogo' src = {logoImg} alt = "sha logo" />
            <span className='libName' >Sha Library </span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            <li className='nav-item'>
              <Link to = "cart" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>cart</Link>
            </li>       
            {isAuthenticated ? (
              <li className='nav-item'>
                <Link to="logout" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                  <button className='logbtn' onClick={() => logout({returnTo: window.location.origin})} >Log Out </button>
              </Link>
              </li>): (
              <li className='nav-item'>
                <Link to="login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                  <button className='logbtn' onClick={() =>loginWithRedirect()} >LOGIN </button>
                </Link>
              </li>
              )
            }     


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar