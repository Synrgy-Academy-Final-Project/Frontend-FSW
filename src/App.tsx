import { Route, Routes } from "react-router-dom";

// Admin
import LoginAdmin from "././pages/Admin/Login/LoginAdmin.tsx";
import Dashboard from "./components/Admin/Dashboard.tsx";
import IndexBandara from "./components/Admin/indexBandara.tsx";
import IndexMaskapai from "./components/Admin/indexMaskapai.tsx";
import IndexTanggal from "./components/Admin/indexTanggal.tsx";
import IndexTransaksi from "./components/Admin/indexTransaksi.tsx";
import IndexDetailPesawat from "./components/Admin/indexDetailPesawat.tsx";
// user
import ETicket from "./pages/User/PageEticket/PageEticket.tsx";
import PesananPage from "./pages/User/PesananPage/PesananPage.tsx";
import ProfilePage from "./pages/User/ProfilePage/ProfilePage.tsx";
import ProfileEdit from "./pages/User/ProfilePage/ProfileEdit/ProfileEdit.tsx";
import PembayaranPage from "./pages/User/PembayaranPage/PembayaranPage.tsx";
import InformationProfile from "./components/InformationProfile.tsx";
import OTPVerification from "./pages/User/ForgetPassword/OTPVerification";
import RegisterUser from "./pages/User/Register/RegisterUser";
import LoginUser from "./pages/User/Login/LoginUser";
import DataPenumpang from "./pages/User/DataPenumpang/DataPenumpang";
import "./App.css";
import TicketList from "./pages/User/TicketList/TicketList.tsx";
import AboutUs from "./pages/User/AboutUs/AboutUs.tsx";
import TempatPopulerPage from "./pages/User/TempatPopulerPage/TempatPopulerPage.tsx";
import VerifyAccount from "./pages/User/VerifyAccount/VerifyAccount";
import ForgetPassword from "./pages/User/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/User/ForgetPassword/ResetPassword";
import LandingPage from "./pages/User/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Routes>
        {/* page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/list-ticket" element={<TicketList />} />
        <Route path="/datapenumpang" element={<DataPenumpang />} />
        <Route path="/eticket" element={<ETicket />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/pesanan" element={<PesananPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/informasiProfile" element={<InformationProfile />} />
        <Route path="/populerplaces" element={<TempatPopulerPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/detailpembayaran" element={<PembayaranPage />} />
        {/*Admin*/}

        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/airport" element={<IndexBandara />} />
        <Route path="/airline" element={<IndexMaskapai />} />
        <Route path="/departure-date" element={<IndexTanggal />} />
        <Route path="/transaction" element={<IndexTransaksi />} />
        <Route path="/detail-airline/:id" element={<IndexDetailPesawat />} />
        <Route path="/verify-account-forgot" element={<OTPVerification />} />
      </Routes>
    </>
  );
}
export default App;
