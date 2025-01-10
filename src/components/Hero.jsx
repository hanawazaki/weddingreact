import { useEffect, useState } from 'react';
import st1 from '../assets/images/slider/st1.jpg';
import st2 from '../assets/images/slider/st2.jpg';
import st3 from '../assets/images/slider/st3.jpg';
import h1 from '../assets/images/photos/h1.jpg';
import f1 from '../assets/images/photos/f1.jpg';
import fh from '../assets/images/photos/fh.jpg';

export default function Hero() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [floating, setFloating] = useState({ floatingX: 0, floatingY: 0 });
  const friction = 1 / 30;

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setPosition((prev) => {
        const newX = prev.x + (floating.floatingX - prev.x) * friction;
        const newY = prev.y + (floating.floatingY - prev.y) * friction;
        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [floating]);

  const handleMouseMove = (e) => {
    const isHovered = document.querySelector('.floating-item:hover');
    if (!isHovered) {
      const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
      const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));

      setFloating({
        floatingX: (20 * lMouseX) / 100,
        floatingY: (10 * lMouseY) / 100,
      });
    }
  };

  return (
    <section className="static-hero"
      onMouseMove={handleMouseMove}
      onClick={handleMouseMove}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xl-3 col-lg-3 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-text">
                <h3>Fauziyyah Khoirunnisa FR, S.T</h3>
                <div className="social">
                  <ul>
                    <li><a href="https://www.instagram.com/namu.1313" target='_blank'><i className="fi flaticon-instagram-1"></i></a></li>
                  </ul>
                </div>
                <div className='mt-3'>
                  <h5 className='fs-6 fw-light'><span className='subtextName'>Putri dari</span> <br /> Bapak Yazida Rachman <br /> Ibu Yatty Nuhayati</h5>
                </div>
              </div>
              <div className="wpo-hero-img floating-item" style={{
                transform: `translateX(${position.x}px) translateY(${position.y}px)`
              }}>
                <img src={f1} alt="st1" />
              </div>
            </div>
          </div>
          <div className="col col-xl-6 col-lg-6 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-img">
                <img src={fh} alt="fh" />
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-img floating-item" style={{
                transform: `translateX(${position.x}px) translateY(${position.y}px)`
              }}>
                <img src={h1} alt="st3" />
              </div>
              <div className="wpo-hero-text">
                <h3>Hairul Ardhan Nawazaki, S.Kom</h3>
                <div className="social">
                  <ul>
                    <li><a href="https://www.facebook.com/hairulardhan.nawazaki" target='_blank'><i className="fi flaticon-facebook-app-symbol"></i></a></li>
                    <li><a href="https://x.com/ha_nawazaki" target='_blank'><i className="fi flaticon-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/hanawazaki" target='_blank'><i className="fi flaticon-instagram-1"></i></a></li>
                  </ul>
                </div>
                <div className='mt-3'>
                  <h5 className='fs-6 fw-light'><span className='subtextName'>Putra dari</span> <br /> Bapak Iwan Hermawan, S.Pd.M.M <br /> Ibu Dini Sobardini, S.Pd</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
