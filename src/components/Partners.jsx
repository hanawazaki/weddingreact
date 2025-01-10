
import partners1 from '../assets/images/partners/1.png'
import partners2 from '../assets/images/partners/2.png'
import partners3 from '../assets/images/partners/3.png'
import partners4 from '../assets/images/partners/4.png'
import partners5 from '../assets/images/partners/5.png'
import partners6 from '../assets/images/partners/6.png'
import partners7 from '../assets/images/partners/7.png'
import partners8 from '../assets/images/partners/8.jpg'
import sectionTitle from '../assets/images/section-title.png';
import Slider from "react-slick";

export default function Partners() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          <div className="wpo-section-title">
            <span>Yang terbaik</span>
            <h2>Pilar Kesuksesan Kami</h2>
            <div className="section-title-img">
              <img src={sectionTitle} alt="" />
            </div>
          </div>
          <div className="col col-xs-12">
            <Slider className="partner-grids partners-slider owl-carousel" {...settings}>
              <div className="grid">
                <a href="https://www.instagram.com/skycateringndecoration/" target='_blank'>
                  <img src={partners5} alt="" />
                </a>
              </div>
              <div className="grid">
                <a href="https://www.instagram.com/lkp_eginaumi/" target='_blank'>
                  <img src={partners2} alt="" />
                </a>
              </div>
              <div className="grid">
                <a href="https://www.instagram.com/dival_weddingorganizer/" target='_blank'>
                  <img src={partners1} alt="" />
                </a>
              </div>
              <div className="grid">
                <a href="javascript:void(0)">
                  <img src={partners3} alt="" />
                </a>
              </div>
              <div className="grid">
                <a href="https://www.instagram.com/dlovamusic.entertainment/" target='_blank'>
                  <img src={partners4} alt="" />
                </a>
              </div>
              <div className="grid">
                <a href="https://shopee.co.id/emotion_clothes" target='_blank'>
                  <img src={partners6} alt="" />
                </a>
              </div>
              <div className="grid">
                <a href="https://shopee.co.id/souvenirunikterbaru" target='_blank'>
                  <img src={partners7} alt="" />
                </a>
              </div>
              <div className="grid">
                <a href="https://www.instagram.com/aw.souvenir/" target='_blank'>
                  <img src={partners8} alt="" />
                </a>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
