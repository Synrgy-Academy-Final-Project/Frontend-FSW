import { Route, Routes } from "react-router-dom";
// import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import Footer from "./components/Footer";
import RegisterUser from "./pages/User/Register/RegisterUser";
import LoginUser from "./pages/User/Login/LoginUser";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Promo from "./components/Promo";
import PopularPlaces from "./components/PopularPlaces";
import "./App.css";
import FilterListTicket from "./components/FilterListTicket";
import TicketList from "./pages/TicketList";
import VerifyAccount from "./pages/User/VerifyAccount/VerifyAccount";

import LandingPage from "./pages/User/LandingPage/LandingPage";

// Admin
import LoginAdmin from "././pages/Admin/Login/LoginAdmin.tsx";
import Dashboard from "./components/Admin/Dashboard.tsx";
import IndexBandara from "./components/Admin/indexBandara.tsx";
import IndexMaskapai from "./components/Admin/indexMaskapai.tsx";
import IndexTanggal from "./components/Admin/indexTanggal.tsx";
import IndexTransaksi from "./components/Admin/indexTransaksi.tsx";

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
        <Route path="/list-ticket" element={<TicketList />} />
        <Route path="/verify-account" element={<VerifyAccount />} />

        {/*Admin*/}
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/airport" element={<IndexBandara />} />
        <Route path="/airline" element={<IndexMaskapai />} />
        <Route path="/departure-date" element={<IndexTanggal />} />
        <Route path="/transaction" element={<IndexTransaksi />} />
      </Routes>
    </>
  );
}

export default App;
