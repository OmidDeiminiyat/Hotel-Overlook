import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Forside } from './pages/Forside';
import { Hotteler } from './pages/Hotteller';
import { Login } from './pages/Login';
import { Værlser } from './pages/Værlser';
import { Reservation } from './pages/Reservation';
import { Nav } from './components/nacigation/Navigation';
import { News } from './pages/News';
import { Footer } from './components/footer/footer';
import { City } from './pages/city';
import { SingleHotel } from './pages/singleHotel';


function App() {

  return (
    <>
      <Router>
        < Nav />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/Hotteler/*" element={<Hotteler />} />
          <Route path="/Værlser" element={<Værlser />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/News/:id" element={<News />} />
          <Route path="/city/:country/:city" element={<City />} />
          <Route path="/city/:country/:city/:rooms" element={<SingleHotel />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        < Footer />
      </Router>
    </>
  )
}

export default App
