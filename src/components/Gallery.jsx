
import React, { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import photos1 from '../assets/images/photos/gallery/1.jpg';
import photos2 from '../assets/images/photos/gallery/2.jpg';
import photos3 from '../assets/images/photos/gallery/3.jpg';
import photos4 from '../assets/images/photos/gallery/4.jpg';
import photos5 from '../assets/images/photos/gallery/5.jpg';
import photos6 from '../assets/images/photos/gallery/6.jpg';

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

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {
      animated: true,
      dragToClose: false,
      toolbar: true,
      showClass: "fancybox-slideIn",
      hideClass: "fancybox-slideOut",
      infinite: false,
    });

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return (
    <section className="wpo-portfolio-section section-padding pt-0" id="gallery">
      <h2 className="hidden">some</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Slider className="portfolio-grids gallery-container clearfix portfolio-slide" {...settings}>
              <div className="grid">
                <div className="img-holder">
                  <a href={photos1} className="fancybox"
                    data-fancybox="gallery"
                    data-caption="Masjid Salman ITB, 26 Desember 2024"
                  >
                    <img src={photos1} alt="" className="img img-responsive img-height-custom" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={photos2} className="fancybox"
                    data-fancybox="gallery"
                    data-caption="Masjid Salman ITB, 26 Desember 2024"
                  >
                    <img src={photos2} alt="" className="img img-responsive img-height-custom" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={photos3} data-fancybox="gallery" className="fancybox"
                    data-caption="Taman Ganesha, 26 Desember 2024"
                  >
                    <img src={photos3} alt="" className="img img-responsive img-height-custom" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={photos4} className="fancybox"
                    data-fancybox="gallery"
                    data-caption="Taman Ganesha, 26 Desember 2024"
                  >
                    <img src={photos4} alt="" className="img img-responsive img-height-custom" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={photos5} className="fancybox"
                    data-fancybox="gallery"
                    data-caption="ITOYA studio, 04 Januari 2025"
                  >
                    <img src={photos5} alt="" className="img img-responsive img-height-custom" />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a href={photos6} className="fancybox"
                    data-fancybox="gallery"
                    data-caption="ITOYA studio, 04 Januari 2025"
                  >
                    <img src={photos6} alt="" className="img img-responsive img-height-custom" />
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
