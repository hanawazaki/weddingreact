import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
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

  return (
    <header id="header" >
      <div className="wpo-site-header">
        <Navigation nameClass="original" />
        <Navigation nameClass="sticky-header" />
      </div>

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
