import { useEffect } from "react";
import loaderimg from '../assets/images/preloader.png';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");

    if (preloader) {
      // Delay selama 100ms, lalu fade-out selama 500ms
      setTimeout(() => {
        preloader.style.transition = "opacity 0.5s ease-out";
        preloader.style.opacity = 0;

        // Menghapus elemen dari tampilan setelah animasi selesai
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);

        // WOW.js Initialization (jika digunakan)
        // if (typeof WOW === "function") {
        //   const wow = new WOW();
        //   wow.init();
        // }
      }, 500);
    }
  }, []); // Efek dijalankan hanya saat komponen di-mount

  return (
    <div className="preloader">
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          <img src={loaderimg} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
