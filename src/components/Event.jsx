import sectionTitle from '../assets/images/section-title.png';
import event1 from '../assets/images/photos/event.jpg';
import { useState, useEffect } from 'react';

export default function Event() {
  const [TimeSchedule, setTimeSchedule] = useState('11:30 AM - 01:30 PM');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScheduleLink, setShowScheduleLink] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams.has('undangan keluarga')) {
      setTimeSchedule("08:00 AM - 11:00 AM (Khusus Keluarga)");
      setShowScheduleLink(true);
    }
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal open/close
  };

  return (
    <section className="wpo-event-section section-padding" id="event">
      <div className="container">
        <div className="row">
          <div className="wpo-section-title">
            <span>Walimatul Ursy</span>
            <h2>Waktu & Tempat</h2>
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
                <h2>Walimatul Ursy</h2>
                <ul>
                  <li>Sabtu, 18 Jan. 2025 {TimeSchedule}</li>
                  <li>Gedung Senbik</li>
                  <li>Jl. Soekarno-Hatta No.729C, Kota Bandung, Jawa Barat 40286</li>
                  <li> <a className="popup-gmaps"
                    href="https://maps.app.goo.gl/yuLfr4DL8qBGPW7XA" target='_blank'>Lihat Lokasi</a>
                  </li>
                  {showScheduleLink && (
                    <li>
                      <button className="btn-schedule" type='button' onClick={handleModalToggle}>Lihat Susunan Acara</button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalToggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Susunan Acara</h3>
            <ul>
              <li>Prosesi Mapag</li>
              <li>Pembacaan Al-Qur’an dan Do’a</li>
              <li>Sambutan Orang Tua Kedua Mempelai</li>
              <li>Sambutan dan Perkenalan Keluarga Besar</li>
              <li>Sambutan dan Perkenalan Pengantin</li>
              <li>Saweran dan Doorprize</li>
              <li>Sesi Foto dan Makan Bersama</li>
            </ul>
            <button onClick={handleModalToggle}>Tutup</button>
          </div>
        </div>
      )}
    </section>
  )
}
