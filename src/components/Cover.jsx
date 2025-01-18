import { Flower } from 'lucide-react';
import flower1 from '../assets/images/ornament3.png';

const Cover = ({ onClose, animationClass }) => {
  return (
    <>
      <div className={`min-vh-100 d-flex align-items-center justify-content-center text-center cover ${animationClass}`} style={styles.container}>
        <div className="p-4 animate-fade-in">
          <div className="mx-auto mb-4" style={styles.flower}>
            <Flower className="w-100 h-100 text-white" />
          </div>
          <h1 className="h4 mb-3 text-white">Walimatul Ursy</h1>
          <h2 className="h3 mb-4 text-white" style={styles.textStyle}>Fauziyyah & Hairul</h2>
          <p className="fs-4 mb-4 text-white">18.01.2025</p>

          <button style={{
            ...styles.button,
            transition: "background-color 0.3s, transform 0.3s",
          }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ba927d";
              e.target.style.color = "#fff";
              e.target.style.outline = "2px solid #fff";

              e.target.style.transform = "scale(1.05)"; // Efek zoom
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
              e.target.style.color = "#000";

              e.target.style.transform = "scale(1)";
            }} onClick={onClose}>
            Buka Undangan
          </button>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "0",
        left: 0,
        transform: "translateX(0%)",
        zIndex: 1
      }}>
        <img src={flower1} alt="" className="flower1"
        />
      </div>
      <div style={{
        position: "absolute",
        top: "0",
        right: 0,
        transform: "translateX(0%)",
        zIndex: 1
      }}>
        <img src={flower1} alt="" className="flower2"
        />
      </div>
    </>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://images.unsplash.com/photo-1524987679478-5f7c9f90a2bf?auto=format&fit=crop&q=80')",
    backgroundColor: "#ba927d",
    backgroundBlendMode: "overlay",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  flower: {
    width: '64px',
    height: '64px'
  },
  button: {
    color: '#000',
    padding: '0.75rem 1.5rem',
    fontSize: '1.2rem',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  },
  textStyle: {
    fontFamily: "Petit Formal Script"
  },
};

export default Cover;
