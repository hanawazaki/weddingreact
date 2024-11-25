import st1 from '../assets/images/slider/st1.jpg';
import st2 from '../assets/images/slider/st2.jpg';
import st3 from '../assets/images/slider/st3.jpg';

export default function Hero() {
  return (
    <section className="static-hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xl-3 col-lg-3 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-text">
                <h3>Hairul Ardhan Nawazaki</h3>
                <div className="social">
                  <ul>
                    <li><a href="#"><i className="fi flaticon-facebook-app-symbol"></i></a></li>
                    <li><a href="#"><i className="fi flaticon-twitter"></i></a></li>
                    <li><a href="#"><i className="fi flaticon-instagram-1"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="wpo-hero-img floating-item">
                <img src={st1} alt="st1" />
              </div>
            </div>
          </div>
          <div className="col col-xl-6 col-lg-6 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-img">
                <img src={st2} alt="st2" />
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-img floating-item">
                <img src={st3} alt="st3" />
              </div>
              <div className="wpo-hero-text">
                <h3>Fauziyyah Khoirunnisa FR</h3>
                <div className="social">
                  <ul>
                    <li><a href="#"><i className="fi flaticon-facebook-app-symbol"></i></a></li>
                    <li><a href="#"><i className="fi flaticon-twitter"></i></a></li>
                    <li><a href="#"><i className="fi flaticon-instagram-1"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
