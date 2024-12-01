import sectionTitle from '../assets/images/section-title.png';
import event1 from '../assets/images/event/1.jpg';

export default function Event() {

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
                <h2>The Reception</h2>
                <ul>
                  <li>Monday, 12 Apr. 2022
                    1:00 PM – 2:30 PM</li>
                  <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                  <li>+1 234-567-8910</li>
                  <li> <a className="popup-gmaps"
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.21212385712!2d144.95275648773628!3d-37.82748510398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQyAzMDA0LCDgpoXgprjgp43gpp_gp43gprDgp4fgprLgpr_gpq_gprzgpr4!5e0!3m2!1sbn!2sbd!4v1503742051881">See
                    Location</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
