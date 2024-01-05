import React from 'react';
import Reactdom from 'react-dom';
import NavbarCss from '../../cssfiles/navbar.css'


// ---------CHANGE THE BUTTONS ON NAVBAR TO LINK-------------------------

export default function Navbar() {
  return (
    <>  
      <nav id='n' className='navbar navbar-expand-lg  py-4  bg-dark'>
        <div className='container-fluid ms-auto ' >
          <a className='navbar-brand text-white ms-5 ' href='/'>
            mail@growing.com
          </a>
          
          <div className='collapse navbar-collapse ' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link active text-white me-2' aria-current='page' href='#' font-weight-bold="true">
                  Web Stories
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white me-2' href='#' font-weight-bold="true">
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white me-2' href='#'>
                  FAQ's
                </a>
              </li>
              <li className='nav-item'>
                {/* <a className='nav-link disabled text-white' aria-disabled='true'> */}
                <a className='nav-link text-white me-2'  href='#'>
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                {/* <a className='nav-link disabled text-white' aria-disabled='true'> */}

             
                <a className='nav-link text-white me-2' href='/signup'>
                  Sign Up
                </a>
              </li>
              <li className='nav-item'>
                {/* <a className='nav-link disabled text-white' aria-disabled='true'> */}
                <a className='nav-link text-white me-2' href='/login'>
                 Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
