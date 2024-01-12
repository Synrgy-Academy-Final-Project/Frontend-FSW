import { Route, Routes } from "react-router-dom";
import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import RegisterUser from "./pages/User/Register/RegisterUser";
import Footer from "./components/Footer";
import LoginUser from "./pages/User/Login/LoginUser";
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Promo from './components/Promo';
import PopularPlaces from './components/PopularPlaces';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path='/header' element={<Header />} />
        <Route path="/user" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/populerplaces" element={<PopularPlaces />} />
      </Routes>
    </>
  );
}

export default App
