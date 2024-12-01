
import portfolio1 from '../assets/images/portfolio/1.jpg';
import portfolio2 from '../assets/images/portfolio/2.jpg';
import portfolio3 from '../assets/images/portfolio/3.jpg';
import portfolio4 from '../assets/images/portfolio/4.jpg';
import portfolio5 from '../assets/images/portfolio/5.jpg';
import portfolio6 from '../assets/images/portfolio/6.jpg';
import Slider from "react-slick";

export default function Gallery() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="wpo-portfolio-section section-padding pt-0" id="gallery">
      <h2 className="hidden">some</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Slider className="portfolio-grids gallery-container clearfix portfolio-slide" {...settings}>
              <div className="grid">
                <div className="img-holder">
                  <a href={portfolio1} className="fancybox"
                    data-fancybox-group="gall-1">
                    <img src={portfolio1} alt="" className="img img-responsive" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={portfolio2} className="fancybox"
                    data-fancybox-group="gall-1">
                    <img src={portfolio2} alt="" className="img img-responsive" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={portfolio3} className="fancybox"
                    data-fancybox-group="gall-1">
                    <img src={portfolio3} alt="" className="img img-responsive" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={portfolio4} className="fancybox"
                    data-fancybox-group="gall-1">
                    <img src={portfolio4} alt="" className="img img-responsive" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={portfolio5} className="fancybox"
                    data-fancybox-group="gall-1">
                    <img src={portfolio5} alt="" className="img img-responsive" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={portfolio6} className="fancybox"
                    data-fancybox-group="gall-1">
                    <img src={portfolio6} alt="" className="img img-responsive" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
