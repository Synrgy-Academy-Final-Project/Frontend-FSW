import { Route, Routes } from "react-router-dom";
// import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import Footer from "./components/Footer";
import RegisterUser from "./pages/User/Register/RegisterUser";
import LoginUser from "./pages/User/Login/LoginUser";
import NewPassword from "./pages/User/NewPassword/NewPassword";
import DataPenumpang from "./pages/User/DataPenumpang/DataPenumpang";
import Header from "./components/Header";
import Feature from "./components/Feature";
import CtaBottom from "./components/CtaBottom";
import PopularPlaces from "./components/PopularPlaces";
import "./App.css";
import TicketList from "./pages/TicketList";
import VerifyAccount from "./pages/User/VerifyAccount/VerifyAccount";
import ForgetPassword from "./pages/User/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/User/ForgetPassword/ResetPassword";
import LandingPage from "./pages/User/LandingPage/LandingPage";

import FilterListTicket from "./components/FilterListTicket";
import TicketSearch from "./components/TicketSearch";
import ModalPesanTiket from "./components/ModalPesanTiket";
import DetailTicket from "./components/DetailTicket";
import DetailSection from "./components/DetailSection";
import DetailHarga from "./components/DetailHarga";
import CardTicket from "./components/CardTicket";
import DropdownClass from "./components/DropdownPassenger";
import OTPVerification from "./pages/User/ForgetPassword/OTPVerification";

function App() {
  return (
    <>
      <Routes>
        {/* page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/datapenumpang" element={<DataPenumpang />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Components */}
        <Route path="/filterListTicket" element={<FilterListTicket />} />
        <Route path="/list-ticket" element={<TicketList />} />
        <Route path="/ticketsearch" element={<TicketSearch />} />
        <Route path="/modalticket" element={<ModalPesanTiket />} />
        <Route path="/detailticket" element={<DetailTicket />} />
        <Route path="/detailsection" element={<DetailSection />} />
        <Route path="/detailharga" element={<DetailHarga />} />
        <Route path="/cardtiket" element={<CardTicket />} />
        <Route path="/cek2" element={<DropdownClass />} />
        <Route path="/verify-account-forgot" element={<OTPVerification />} />
      </Routes>
    </>
  );
}

export default App;
