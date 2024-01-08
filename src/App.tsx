import { Route, Routes } from "react-router-dom";
import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import RegisterUser from "./pages/User/Register/RegisterUser";
import Footer from "./components/Footer";
import LoginUser from "./pages/User/Login/LoginUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />

        <Route path="/user" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
