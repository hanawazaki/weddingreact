import sectionTitle from '../assets/images/section-title.png';
import event1 from '../assets/images/event/1.jpg';
import { useState, useEffect } from 'react';

export default function Event() {
  const [TimeSchedule, setTimeSchedule] = useState('11:30 AM - 01:30 PM');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams.has('undangan keluarga')) {
      setTimeSchedule("08:30 AM - 11:00 AM (Khusus Keluarga)");
    }
  }, []);

  return (
    <section className="wpo-event-section section-padding" id="event">
      <div className="container">
        <div className="row">
          <div className="wpo-section-title">
            <span>Our Wedding</span>
            <h2>When & Where</h2>
            <div className="section-title-img">
              <img src={sectionTitle} alt="" />
            </div>
          </div>
        </div>
        <div className="wpo-event-wrap owl-carousel">
          <div className="wpo-event-item">
            <div className="wpo-event-img">
              <img src={event1} alt="" />
            </div>
            <div className="wpo-event-right">
              <div className="wpo-event-text">
                <h2>Resepsi</h2>
                <ul>
                  <li>Sabtu, 18 Jan. 2025 {TimeSchedule}</li>
                  <li>Gedung Senbik</li>
                  <li>Jl. Soekarno-Hatta No.729C, Kota Bandung, Jawa Barat 40286</li>
                  <li> <a className="popup-gmaps"
                    href="https://maps.app.goo.gl/yuLfr4DL8qBGPW7XA" target='_blank'>Lihat Lokasi</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
