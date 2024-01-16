import { Route, Routes } from "react-router-dom";
// import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import Footer from "./components/Footer";
import RegisterUser from "./pages/User/Register/RegisterUser";
import LoginUser from "./pages/User/Login/LoginUser";
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Promo from './components/Promo';
import PopularPlaces from './components/PopularPlaces';
import "./App.css";
import FilterListTicket from "./components/FilterListTicket";
import LandingPage from "./pages/User/LandingPage/LandingPage";
import TicketList from "./pages/TicketList";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/footer" element={<Footer />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/populerplaces" element={<PopularPlaces />} />
        <Route path="/filterListTicket" element={<FilterListTicket />} />
        <Route path="/list-ticket" element={<TicketList/>} />

      </Routes>
    </>
  );
}

export default App;
