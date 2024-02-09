import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarCss from "../../cssfiles/navbar.css";

export default function Navbar() {
  const location = useLocation();

  // Check if the current page is the user profile page
  const isUserProfilePage = location.pathname === "/userprofile";

  return (
    <>
      <nav id="n" className="navbar navbar-expand-lg  py-4  bg-dark">
        <div className="container-fluid ms-auto ">
          <Link className="navbar-brand text-white ms-5" to="/">
            mail@growing.com
          </Link>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white me-2"
                  to="#"
                  fontWeight="bold"
                >
                  Web Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white me-2"
                  to="#"
                  fontWeight="bold"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white me-2" to="#">
                  FAQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white me-2" to="#">
                  About Us
                </Link>
              </li>
              {isUserProfilePage ? null : (
                <li className="nav-item">
                  <Link className="nav-link text-white me-2" to="/signup">
                    Sign Up
                  </Link>
                </li>
              )}
              {isUserProfilePage ? (
                <li className="nav-item">
                  <Link className="nav-link text-white me-2" to="/login">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link text-white me-2" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
