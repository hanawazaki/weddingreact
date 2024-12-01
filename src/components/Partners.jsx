
import partners1 from '../assets/images/partners/1.png'
import partners2 from '../assets/images/partners/2.png'
import partners3 from '../assets/images/partners/3.png'
import partners4 from '../assets/images/partners/4.png'
import partners5 from '../assets/images/partners/5.png'
import Slider from "react-slick";

export default function Partners() {

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
          slidesToShow: 6,
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
    <section className="wpo-partners-section section-padding pt-0">
      <h2 className="hidden">Partners</h2>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <Slider className="partner-grids partners-slider owl-carousel" {...settings}>
              <div className="grid">
                <img src={partners1} alt="" />
              </div>
              <div className="grid">
                <img src={partners2} alt="" />
              </div>
              <div className="grid">
                <img src={partners3} alt="" />
              </div>
              <div className="grid">
                <img src={partners4} alt="" />
              </div>
              <div className="grid">
                <img src={partners5} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
