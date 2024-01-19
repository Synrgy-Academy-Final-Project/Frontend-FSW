import { Route, Routes } from "react-router-dom";
import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import Footer from "./components/Footer";
import TicketSearch from "./components/TicketSearch";
import ModalPesanTiket from "./components/ModalPesanTiket";
import DetailTicket from "./components/DetailTicket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/ticketsearch" element={<TicketSearch />} />
        <Route path="/modalticket" element={<ModalPesanTiket />} />
        <Route path="/detailticket" element={<DetailTicket />} />
      </Routes>
    </>
  );
}

export default App;
