
export default function Footer() {
  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Links</h3>
                </div>
                <div className="link-wrap">
                  <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="service.html">Services</a></li>
                    <li><a href="rsvp.html">RSVP</a></li>
                  </ul>
                  <ul>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="index.html">Get Quote</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <a className="logo" href="index.html"><img src="assets/images/logo-2.svg" alt="" /></a>
                </div>
                <p>Kami tak sabar untuk bertemu dengan semua teman dan kerabat tercinta di hari pernikahan kami nanti.</p>
              </div>
            </div>

            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <p>Nozze@wpoceans.com</p>
                  <p>4517 Washington Ave. Manchester,
                    Kentucky 39495</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright"> &copy; Copyright 2022 | <a href="index.html">Nozze</a> | All right
                reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
