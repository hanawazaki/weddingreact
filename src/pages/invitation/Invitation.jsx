import { useState } from 'react';
import Preloader from '../../components/Preloader'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import WeddingTime from '../../components/WeddingTime';
import OurStory from '../../components/OurStory';
import Gallery from '../../components/Gallery';
import Rsvp from '../../components/Rsvp';
import Event from '../../components/Event';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';
import Cover from '../../components/Cover';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../assets/css/themify-icons.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/flaticon.css'
import '../../assets/css/style.css'
import './Invitation.css'

const Invitation = () => {
  const [showCover, setShowCover] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  const handleCloseCover = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setShowCover(false);
    }, 1000);
  };

  return (
    <>
      {
        showCover ? (
          <div>
            <Preloader />
            <Cover onClose={handleCloseCover} animationClass={animationClass} />
          </div>
        ) : (
          <div className="page-wrapper">
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
        )
      }

    </>
  )
}

export default Invitation