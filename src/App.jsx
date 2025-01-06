import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/themify-icons.css'
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import WeddingTime from './components/WeddingTime';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import Event from './components/Event';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Preloader />
        <Header />
        <Hero />
        <WeddingTime />
        <OurStory />
        <Gallery />
        <Rsvp />
        <Event />
        <Partners />
        <Footer />
      </div>
    </>
  )
}

export default App
