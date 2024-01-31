import { Route, Routes } from "react-router-dom";
import RegisterUser from "./pages/User/Register/RegisterUser";
import LoginUser from "./pages/User/Login/LoginUser";
import DataPenumpang from "./pages/User/DataPenumpang/DataPenumpang";
import Header from "./components/Header";
import "./App.css";
import TicketList from "./pages/TicketList";
import VerifyAccount from "./pages/User/VerifyAccount/VerifyAccount";
import ForgetPassword from "./pages/User/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/User/ForgetPassword/ResetPassword";
import LandingPage from "./pages/User/LandingPage/LandingPage";

// Admin
import LoginAdmin from "././pages/Admin/Login/LoginAdmin.tsx";
import Dashboard from "./components/Admin/Dashboard.tsx";
import IndexBandara from "./components/Admin/indexBandara.tsx";
import IndexMaskapai from "./components/Admin/indexMaskapai.tsx";
import IndexTanggal from "./components/Admin/indexTanggal.tsx";
import IndexTransaksi from "./components/Admin/indexTransaksi.tsx";

// component
import FilterListTicket from "./components/FilterListTicket";
import ETicket from "./components/ETicket.tsx";
import TicketSearch from "./components/TicketSearch";
import ModalPesanTiket from "./components/ModalPesanTiket";
import DetailTicket from "./components/DetailTicket";
import DetailSection from "./components/DetailSection";
import DetailHarga from "./components/DetailHarga";
import CardTicket from "./components/CardTicket";
import DropdownClass from "./components/DropdownPassenger";
import OTPVerification from "./pages/User/ForgetPassword/OTPVerification";
import DetailSectionPayment from "./components/DetailSectionPayment";
import DetailPerjalanan from "./components/DetailPerjalanan.tsx";

function App() {
  return (
    <>
      <Routes>
        {/* page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/list-ticket" element={<TicketList />} />
        <Route path="/datapenumpang" element={<DataPenumpang />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Components */}
        <Route path="/filterListTicket" element={<FilterListTicket />} />
        <Route path="/eticket-comp" element={<ETicket />} />
        <Route path="/detailperjalanan" element={<DetailPerjalanan />} />

        {/*Admin*/}
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/airport" element={<IndexBandara />} />
        <Route path="/airline" element={<IndexMaskapai />} />
        <Route path="/departure-date" element={<IndexTanggal />} />
        <Route path="/transaction" element={<IndexTransaksi />} />
        <Route path="/ticketsearch" element={<TicketSearch />} />
        <Route path="/modalticket" element={<ModalPesanTiket />} />
        <Route path="/detailticket" element={<DetailTicket />} />
        <Route path="/detailsection" element={<DetailSection />} />
        <Route path="/detailharga" element={<DetailHarga />} />
        <Route path="/cardtiket" element={<CardTicket />} />
        <Route path="/cek2" element={<DropdownClass />} />
        <Route path="/verify-account-forgot" element={<OTPVerification />} />
        <Route
          path="/detailsectionpayment"
          element={<DetailSectionPayment />}
        />
      </Routes>
    </>
  );
}

export default App;
