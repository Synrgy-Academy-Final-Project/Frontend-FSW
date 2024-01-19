import { Route, Routes } from "react-router-dom";
// import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import Footer from "./components/Footer";
import RegisterUser from "./pages/User/Register/RegisterUser";
import LoginUser from "./pages/User/Login/LoginUser";
import NewPassword from "./pages/User/NewPassword/NewPassword";
import Header from './components/Header';
import Feature from './components/Feature';
import CtaBottom from './components/CtaBottom';
import PopularPlaces from './components/PopularPlaces';
import "./App.css";
import FilterListTicket from "./components/FilterListTicket";
import LandingPage from "./pages/User/LandingPage/LandingPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/footer" element={<Footer />} />

        <Route path="/fitur" element={<Feature />} />
        <Route path="/ctabot" element={<CtaBottom />} />
        <Route path="/populerplaces" element={<PopularPlaces />} />
        <Route path="/filterListTicket" element={<FilterListTicket />} />

      </Routes>
    </>
  );
}

export default App;
