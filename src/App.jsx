import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Preloader />
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default App
