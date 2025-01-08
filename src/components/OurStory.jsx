import sectionTitle from '../assets/images/section-title.png';
import story1 from '../assets/images/photos/1st.jpg';
import story2 from '../assets/images/photos/prakhitbah.jpg';
import story3 from '../assets/images/photos/khitbah.jpg';
import story4 from '../assets/images/photos/nikah.jpg';
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
            <span>Kisah Kami</span>
            <h2>Bagaimana kami berproses</h2>
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
                    <img src={story1} alt="" className="img img-responsive img-height-1" />
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
                    <span className="date">15 Oktober, 2023</span>
                    <h3>Awal Pertemuan</h3>
                    <p>
                      Fauziyyah adalah adik kelas Hairul semasa SMA. Namun, pertemuan pertama kami terjadi di tempat olahraga bulutangkis saat teman-teman alumni SMA kembali berkumpul untuk bermain bersama. Kami berdua merasa nyaman dan saling memahami satu sama lain hingga akhirnya memutuskan untuk menjalin hubungan yang lebih serius pada bulan Juli 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text right-align-text">
                    <span className="date">18 Agustus, 2024</span>
                    <h3>Pertemuan Keluarga</h3>
                    <p>Akhirnya, pada 18 Agustus 2024, keluarga kami bertemu untuk pertama kalinya. Pertemuan ini menjadi langkah awal penting dalam hubungan kami, karena kami mulai membicarakan rencana besar untuk masa depan bersama.</p>
                  </div>
                </div>
                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                  <div className="img-holder right-align-img">
                    <img src={story2} alt="" className="img img-responsive img-height" />
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
                    <img src={story3} alt="" className="img img-responsive img-height" />
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
                    <span className="date"> 5 Oktober, 2024</span>
                    <h3>Khitbah
                    </h3>
                    <p>Langkah berikutnya dalam perjalanan cinta kami terjadi pada 5 Oktober 2024, dimana saat pertemuan keluarga kedua ini Hairul secara resmi mengkhitbah Fauziyyah. Pertemuan ini diadakan di sebuah tempat di Bandung. Setelah itu, keluarga kami mulai mempersiapkan rencana pernikahan yang melibatkan acara akad dan resepsi yang dilaksanakan secara terpisah.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text right-align-text">
                    <span className="date">26 Desember, 2024</span>
                    <h3>Hari Pernikahan</h3>
                    <p>Alhamdulillah, hari yang dinantikan akhirnya tiba. Pada 26 Desember 2024, kami melangsungkan akad pernikahan di Masjid Salman ITB. Acara yang sakral ini dihadiri oleh keluarga dan kerabat terdekat. Selanjutnya, kami mempersiapkan acara resepsi yang akan dilaksanakan pada 18 Januari 2025 untuk merayakan hari bahagia kami bersama teman-teman dan keluarga yang lebih luas.</p>
                  </div>
                </div>
                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                  <div className="img-holder right-align-img">
                    <img src={story4} alt="" className="img img-responsive img-height" />
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
