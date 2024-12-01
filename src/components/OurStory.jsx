import sectionTitle from '../assets/images/section-title.png';
import story1 from '../assets/images/story/1.jpg';
import story2 from '../assets/images/story/2.jpg';
import story3 from '../assets/images/story/3.jpg';
import shape1 from '../assets/images/story/shape-1.png';
import shape2 from '../assets/images/story/shape-2.png';
import shape3 from '../assets/images/story/shape-3.png';
import shape4 from '../assets/images/story/shape-4.png';
import shape5 from '../assets/images/story/shape-5.png';
import shape6 from '../assets/images/story/shape-6.png';

export default function OurStory() {
  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <div className="row">
          <div className="wpo-section-title">
            <span>Our Story</span>
            <h2>How It Happened</h2>
            <div className="section-title-img">
              <img src={sectionTitle} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="story-timeline">
              <div className="round-shape"></div>
              <div className="row">
                <div className="col col-lg-6 col-12">
                  <div className="img-holder right-align-text left-site">
                    <img src={story1} alt="" className="img img-responsive" />
                    <div className="story-shape-img-1">
                      <img src={shape1} alt="" />
                    </div>
                    <div className="story-shape-img-2">
                      <img src={shape2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-12 text-holder">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text">
                    <span className="date">22 Feb, 2019</span>
                    <h3>How we meet</h3>
                    <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                      Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum
                      elit convallis libero. Nunc in eu tellus ipsum placerat.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text right-align-text">
                    <span className="date">02 Nov, 2020</span>
                    <h3>He proposed, I said Yes</h3>
                    <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                      Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum
                      elit convallis libero. Nunc in eu tellus ipsum placerat.</p>
                  </div>
                </div>
                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                  <div className="img-holder right-align-img">
                    <img src={story2} alt="" className="img img-responsive" />
                    <div className="story-shape-img-1">
                      <img src={shape3} alt="" />
                    </div>
                    <div className="story-shape-img-2">
                      <img src={shape4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-6 col-12">
                  <div className="img-holder video-holder left-site">
                    <img src={story3} alt="" className="img img-responsive" />
                    <div className="story-shape-img-1">
                      <img src={shape5} alt="" />
                    </div>
                    <div className="story-shape-img-2">
                      <img src={shape6} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-12 text-holder">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text">
                    <span className="date"> 15 Apr, 2021</span>
                    <h3>Our Engagement Day</h3>
                    <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                      Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum
                      elit convallis libero. Nunc in eu tellus ipsum placerat.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                  <div className="round-shape-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
