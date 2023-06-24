
import React from 'react';
import Navbar from "../Navbar/Navbar";
import Slider from "../ImageSlider";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

import { Auth0Provider } from '@auth0/auth0-react';


const Header = () => {
  return (
  <Auth0Provider domain='dev-e4qpzehmdgvnm4fe.us.auth0.com' clientId='9EJDKY8KeUJxYYnA3H6ZeprEdjPqLUba' redirectUri={window.location.origin}>
    <div className='holder'>
      
        <header className='header'>
            <Slider />
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Discover the Best Books.</h2><br />
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm /> 
            </div>
        </header>
    </div>
  </Auth0Provider>
  )
}

export default Header