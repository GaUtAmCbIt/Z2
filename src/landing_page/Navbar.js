import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg border-bottom  p-3 sticky-top" style={{backgroundColor:"#fff"}}>
        <div class="container-fluid "  >
          <Link class="navbar-brand" to="/">
            <img src='/media/images/logo.svg' className="mx-5" style={{width:"22%"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item  mx-3">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item  mx-3">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item  mx-3">
                <a href='https://z-fud3.onrender.com/' className="nav-link">Dashboard</a>
              </li>
              <li class="nav-item  mx-3">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item  mx-3">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item  mx-3">
                <a class="nav-link" href="#">
                <i class="fa-solid fa-bars"></i>
                </a>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
