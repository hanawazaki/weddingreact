import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const audioRef = useRef('');
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {

    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((err) => {
        console.error("Auto-play failed:", err);
      });
    }

    const navOriginal = document.querySelector(".navigation.navbar.navbar-expand-lg.navbar-light");

    if (navOriginal) {
      if (!document.querySelector(".sticky-header")) {
        const navClone = navOriginal.cloneNode(true);
        navOriginal.parentNode.insertBefore(navClone, navOriginal.nextSibling);

        navOriginal.classList.add("original");
        navClone.classList.add("sticky-header");
      }
    }

    const handleScroll = () => {
      // Sticky menu
      const header = document.querySelector(".wpo-site-header");
      const navOri = document.querySelector(".navigation.original");
      const navCl = document.querySelector(".navigation.sticky-header");

      if (header) {
        const stickyClass = "sticky-on";
        if (window.scrollY > 500) {
          navOri.classList.add(stickyClass);
          navCl.classList.add(stickyClass);
        } else {
          navOri.classList.remove(stickyClass);
          navCl.classList.remove(stickyClass);
        }
      }

      // Toggle "Back to Top" button
      setIsBackToTopVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",
    },
    button: {
      position: "fixed",
      bottom: "75px",
      right: "20px",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      outline: "none",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    icon: {
      color: "#fff",
      fontSize: "24px",
    }
  }


  return (
    <header id="header" >
      <div className="wpo-site-header">
        <Navigation nameClass="original" />
        <Navigation nameClass="sticky-header" />
      </div>
      <audio loop ref={audioRef} src="/song1.ogg" />
      <button
        className="play-button"
        onClick={togglePlayPause}
        style={{
          ...styles.button,
          backgroundColor: isPlaying ? "#000" : "#000",
        }}
      >
        <i
          className={`ti ${isPlaying ? "ti-control-pause" : "ti-control-play"}`}
          style={styles.icon}
        ></i>
      </button>
      {isBackToTopVisible && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 15px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <i className="ti-arrow-up" style={{ fontSize: "16px" }}></i>
        </button>
      )}
    </header>
  )



}
