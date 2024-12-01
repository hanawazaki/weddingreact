import React, { useState } from 'react'

export default function Navigation({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);

    const navHolder = e.target.closest("nav").querySelector(".navigation-holder");
    navHolder.classList.toggle("slideInn");
    e.target.classList.toggle("x-close");
  };

  const closeNav = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className={`navigation navbar navbar-expand-lg navbar-light ${className}`}>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
            <div className="mobail-menu">
              <button type="button" className="navbar-toggler open-btn" onClick={handleToggleMenu}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar first-angle"></span>
                <span className="icon-bar middle-angle"></span>
                <span className="icon-bar last-angle"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-6">
            <div className="navbar-header">
              <a className="navbar-brand logo" href="/">H<span>&</span>F</a>
            </div>
          </div>
          <div className="col-lg-8 col-md-1 col-1">
            <div id="navbar" className={`collapse navbar-collapse navigation-holder ${isMenuOpen ? "slideInn" : ""}`}>
              <button className="menu-close" onClick={closeNav}><i className="ti-close"></i></button>
              <ul className="nav navbar-nav mb-2 mb-lg-0">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#story">Story</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#RSVP">RSVP</a>
                </li>
                <li>
                  <a href="#event">Events</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
