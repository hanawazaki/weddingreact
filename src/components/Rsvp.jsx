
import { useState } from 'react';

import vector1 from '../assets/images/contact/1.png';
import vector2 from '../assets/images/contact/2.png';
import FormRsvp from './FormRsvp';
import Messages from '../components/Messages'

export default function Rsvp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal open/close
  };

  return (
    <>
      <section className="wpo-contact-section" id="RSVP">
        <div className="container">
          <div className="wpo-contact-section-wrapper">
            <div className="wpo-contact-form-area">
              <div className="wpo-section-title">
                <h2>Pesan & Doa untuk kami</h2>
              </div>
              <div className='row justify-content-center mb-3'>
                <div className='col-6 text-center'>
                  <button className="btn-schedule" type='button' onClick={handleModalToggle}>isi kehadiran disini</button>
                </div>
              </div>

              <div className='rsvp-messages styled-scrollbar'
                style={{
                  width: "auto",
                  maxHeight: "500px",
                  overflowY: "auto",
                  padding: "16px",
                }}
              >
                <Messages />
              </div>
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
      {
        isModalOpen && (
          <FormRsvp handleModalToggle={handleModalToggle} />
        )
      }
    </>
  )
}
