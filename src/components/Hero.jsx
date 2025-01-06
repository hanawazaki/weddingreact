import { useEffect, useState } from 'react';
import st1 from '../assets/images/slider/st1.jpg';
import st2 from '../assets/images/slider/st2.jpg';
import st3 from '../assets/images/slider/st3.jpg';

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
                <h3>Hairul Ardhan Nawazaki</h3>
              </div>
              <div className="wpo-hero-img floating-item" style={{
                transform: `translateX(${position.x}px) translateY(${position.y}px)`
              }}>
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
              <div className="wpo-hero-img floating-item" style={{
                transform: `translateX(${position.x}px) translateY(${position.y}px)`
              }}>
                <img src={st3} alt="st3" />
              </div>
              <div className="wpo-hero-text">
                <h3>Fauziyyah Khoirunnisa FR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
