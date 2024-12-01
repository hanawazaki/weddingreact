import { useState, useEffect } from 'react';
import dateShare from '../assets/images/date-shape.png';



export default function WeddingTime() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date('2025-01-18T09:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="wpo-wedding-time">
      <h2 className="hidden">some</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xs-12">
            <div className="clock-grids">
              <div className="clock-grids-inner">
                <div className="wpo-wedding-time-text">
                  <h2>We <i className="fi flaticon-heart-1"></i> Are <i className="fi flaticon-heart-1"></i>
                    Getting <i className="fi flaticon-heart-1"></i> Married</h2>
                  <p>Date : Jan 18,2025</p>
                </div>
                <div id="clock">
                  <div className="box">
                    <div>
                      <div className="time">{timeLeft.days}</div>
                      <span>Days</span>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <div className="time">{timeLeft.hours}</div>
                      <span>Hours</span>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <div className="time">{timeLeft.minutes}</div>
                      <span>Mins</span>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <div className="time">{timeLeft.seconds}</div>
                      <span>Secs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape-1"><img src={dateShare} alt="" /></div>
              <div className="shape-2"><img src={dateShare} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
