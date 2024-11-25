
export default function Header() {
  return (
    <header id="header">
      <div className="wpo-site-header">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <button type="button" className="navbar-toggler open-btn">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <a className="navbar-brand logo" href="index.html">H<span>&</span>F</a>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li><a className="active" href="index.html">Wedding Home</a></li>
                        <li><a href="index-2.html">Wedding Planner</a></li>
                        <li><a href="index-3.html">Announcement</a></li>
                        <li><a href="index-4.html">Shop Home</a></li>
                        <li><a href="index-5.html">Invitation</a></li>
                      </ul>
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
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button className="search-toggle-btn"><i
                        className="fi flaticon-search"></i></button>
                      <div className="header-search-form">
                        <form>
                          <div>
                            <input type="text" className="form-control"
                              placeholder="Search here..." />
                            <button type="submit"><i
                              className="fi flaticon-search"></i></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
