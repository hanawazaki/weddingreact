
import { useState } from 'react';
import vector1 from '../assets/images/contact/1.png';
import vector2 from '../assets/images/contact/2.png';

export default function Rsvp() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    attendance: 'attend',
    count: '1',
  });

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    setFormData({
      ...formData,
      [name || 'attendance']: id || value, // Handle radio button by 'id'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <section className="wpo-contact-section" id="RSVP">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="wpo-contact-form-area">
            <div className="wpo-section-title">
              <h2>Konfirmasi kedatangan & Pesan</h2>
            </div>
            <form className="contact-validation-active" id="contact-form-main" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required />
              </div>
              <div>
                <textarea
                  className="form-control"
                  style={{ height: 'auto' }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Pesan'
                  rows="4"
                  required
                />
              </div>
              <div className="radio-buttons">
                <p>
                  <input
                    type="radio"
                    id="attend"
                    name="attendance"
                    checked={formData.attendance === 'attend'}
                    onChange={handleChange}
                  />
                  <label htmlFor="attend">Ya, Saya akan datang</label>
                </p>
                <p>
                  <input
                    type="radio"
                    id="not"
                    name="attendance"
                    checked={formData.attendance === 'not'}
                    onChange={handleChange}
                  />
                  <label htmlFor="not">Maaf, Saya tidak bisa datang</label>
                </p>
              </div>
              <div>
                <label htmlFor="" style={{ color: "white" }}>
                  Jumlah Kehadiran
                </label>
                <input type="number" className='form-control'
                  name="count"
                  value={formData.count}
                  onChange={handleChange}
                  required
                />

              </div>
              <div className="submit-area">
                <button type="submit" className="theme-btn-s3">Kirim</button>
                <div id="c-loader">
                  <i className="ti-reload"></i>
                </div>
              </div>
              <div className="clearfix error-handling-messages">
                <div id="success">Thank you</div>
                <div id="error"> Error occurred while sending email. Please try again later.
                </div>
              </div>
            </form>
            <div className="border-style"></div>
          </div>
          <div className="vector-1">
            <img src={vector1} alt="" />
          </div>
          <div className="vector-2">
            <img src={vector2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
