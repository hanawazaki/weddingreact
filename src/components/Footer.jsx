
export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <label className="logo-footer" href="/">F<span>&</span>H</label>
                </div>
                <p>Terima Kasih</p>
                <p>Kami tak sabar untuk bertemu dengan semua teman dan kerabat tercinta di hari walimah kami nanti.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright"> &copy; Copyright {currentYear} | Hairul Ardhan Nawazaki | All right
                reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
