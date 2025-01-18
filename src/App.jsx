import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Invitation from './pages/invitation/Invitation';
import Bukutamu from './pages/bukutamu/Bukutamu';
import Vipscreen from './pages/vipscreen/Vipscreen';
import Slideshow from './pages/Slideshow';

function App() {
  const guests = [
    { nama: "Asep", leave_status: false, status: true, selected: false },
    { nama: "Dadang", leave_status: false, status: true, selected: false },
    { nama: "Adi", leave_status: false, status: true, selected: false },
    { nama: "Nina", leave_status: true, status: false, selected: false },
    { nama: "Burhan", leave_status: false, status: true, selected: false },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/bukutamu" element={<Bukutamu />} />
        <Route path="/vipscreen" element={<Vipscreen />} />
        <Route path="/slideshow" element={<Slideshow specialguest={guests} />} />
      </Routes>
    </Router>
  )
}

export default App
