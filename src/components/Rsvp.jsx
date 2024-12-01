
import { useState } from 'react';

export default function Rsvp() {
  const [attendance, setAttendance] = useState('attend');
  return (
    <section className="wpo-contact-section" id="RSVP">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="wpo-contact-form-area">
            <div className="wpo-section-title">
              <h2>Are you attending?</h2>
            </div>
            <form method="post" className="contact-validation-active" id="contact-form-main">
              <div>
                <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
              </div>
              <div>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                <input type="radio" id="attend" name="radio-group" checked={attendance === 'attend'} onChange={() => setAttendance('attend')} />
                <div className="radio-buttons">
                  <p>
                    <input type="radio" id="not" name="radio-group" checked={attendance === 'not'} onChange={() => setAttendance('not')} />
                  </p>
                  <p>
                    <input type="radio" id="not" name="radio-group" />
                    <label htmlFor="not">Sorry, I can’t come</label>
                  </p>
                </div>
                <div>
                  <input type="text" className="form-control" name="what" id="what"
                    placeholder="What Will You Be Attending" />
                </div>
                <div>
                  <select name="guest" className="form-control" >
                    <option disabled="disabled" defaultValue>Number Of Guests</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                  </select>
                </div>
                <div>
                  <select name="meal" className="form-control last">
                    <option disabled="disabled" defaultValue>Meal Preferences</option>
                    <option>Chicken Soup</option>
                    <option>Motton Kabab</option>
                    <option>Chicken BBQ</option>
                    <option>Mix Salad</option>
                    <option>Beef Ribs </option>
                  </select>
                </div>
                <div className="submit-area">
                  <button type="submit" className="theme-btn-s3">RSVP</button>
                  <div id="c-loader">
                    <i className="ti-reload"></i>
                  </div>
                </div>
                <div className="clearfix error-handling-messages">
                  <div id="success">Thank you</div>
                  <div id="error"> Error occurred while sending email. Please try again later.
                  </div>
                </div>
              </div>
            </form>
            <div className="border-style"></div>
          </div>
          <div className="vector-1">
            <img src="assets/images/contact/1.png" alt="" />
          </div>
          <div className="vector-2">
            <img src="assets/images/contact/2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
