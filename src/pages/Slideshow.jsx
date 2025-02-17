import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import welcomeImage from "../assets/images/slideshow/welcome.png";
import thankyouImage from "../assets/images/slideshow/thankyou.png";
import './Slideshow.css'

const Slideshow = () => {
  const [specialguest, setSpecialGuest] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualSelected, setManualSelected] = useState(null);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [bgImage, setBgImage] = useState("");
  const [message, setMessage] = useState({
    name: '',
    katerangan: ''
  });

  useEffect(() => {
    const fetchGuests = onSnapshot(
      query(
        collection(db, "datamaster"),
        where("vip", "==", true),
        where("status", "==", true),
      ),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setSpecialGuest(data);
      },
      (error) => {
        console.error("Error fetching data from Firebase:", error);
      }
    );

    return () => fetchGuests();
  }, []);

  useEffect(() => {
    getMessage()

    let timer;
    if (specialguest.length > 0) {

      const selectedIndex = specialguest.findIndex((guest) => guest.selected);

      if (selectedIndex !== -1) {
        setCurrentIndex(selectedIndex);

      } else {
        timer = setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % specialguest.length);
        }, 2000);
      }
    }


    return () => clearTimeout(timer);
  }, [currentIndex, manualSelected, previousIndex, specialguest]);

  const currentGuest = specialguest[currentIndex] || {};

  const getMessage = () => {
    // if (manualSelected !== null) {
    //   return `Menampilkan secara manual: ${specialguest[manualSelected]?.nama_lengkap || "Tamu tidak dikenal"}`;
    // }
    if (currentGuest.status && currentGuest.leave_status == false) {
      setBgImage(welcomeImage)
      setMessage({
        name: currentGuest.nama_lengkap || "",
        keterangan: currentGuest.keterangan_slideshow || ""
      })
    }
    else if (currentGuest.status && currentGuest.leave_status) {
      setBgImage(thankyouImage)
      setMessage({
        name: currentGuest.nama_lengkap || "",
        keterangan: currentGuest.keterangan_slideshow || ""
      })
    } else {
      setBgImage(thankyouImage)
      setMessage({
        name: currentGuest.nama_lengkap || "",
        keterangan: currentGuest.keterangan_slideshow || ""
      })
    }
  };


  return (
    <div className={`transition-container fade-in`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }} >
      <div>
        {currentGuest.leave_status === false ?
          (
            <>
              <div className="max-w-3xl text-center">
                <div className="slideshow title mb-[6rem]" >
                  <h5 className="text-white antic-regular text-3xl">WELCOME TO</h5>
                  <h5 className="text-white antic-regular text-3xl">Fauziyyah & Hairul's Wedding</h5>
                </div>
                <div className="mb-5">
                  <h1 className="text-white lejour-serif mb-2 text-5xl">{message.name}</h1>
                  <h1 className="text-white antic-regular text-3xl">{message.keterangan}</h1>
                </div>
                <h1 className="text-white antic-regular text-3xl">{currentGuest.vip ? 'VIP Area' : ''}</h1>
              </div>
            </>
          )
          :
          (
            <>
              <div className="max-w-3xl text-center">
                <div className="slideshow title-thankyou mb-5 flex flex-col space-y-2">
                  <h5 className="text-white text-7xl">THANK YOU</h5>
                  <h5 className="text-white text-3xl">FOR COMING</h5>
                </div>
                <div className="mb-5">
                  <h1 className="text-white mb-2 lejour-serif text-5xl">{message.name}</h1>
                  <h1 className="text-white lejour-serif text-3xl">{message.keterangan}</h1>
                </div>
                <h1 className="text-white lejour-serif text-3xl">Sabtu, 18 Januari 2025</h1>
              </div>
            </>
          )
        }

      </div>
    </div >
  );
};


export default Slideshow;
