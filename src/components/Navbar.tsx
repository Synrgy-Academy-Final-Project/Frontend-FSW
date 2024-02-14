import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsPower } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface User {
  firstName?: string;
  lastName?: string;
}

const Navbar: React.FC = () => {
  const token = localStorage.getItem("token");

  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  const [user, setUser] = useState<User>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(base_url + "/user-detail/logged-in-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 500) {
          localStorage.removeItem("token");
          throw new Error("Token tidak valid!");
        }

        const responseJson = await response.json();

        if (response.status === 200) {
          setUser({
            firstName: responseJson.data.usersDetails.firstName,
            lastName: responseJson.data.usersDetails.lastName,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    // Hapus token dari local storage
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li>
            <button
              onClick={() => navigate("/")}
              className={
                window.location.pathname === "/"
                  ? "bg-white p-3 bg-opacity-50 rounded-4"
                  : ""
              }
            >
              <span>Beranda</span>
            </button>
          </li>
          <li
            className={
              window.location.pathname === "/list-ticket"
                ? "bg-white p-3 bg-opacity-50 rounded-4"
                : ""
            }
          >
            <button onClick={() => navigate("/list-ticket")}>
              <span>Tiket Pesawat</span>
            </button>
          </li>
          <li
            className={
              window.location.pathname === "/populerplaces"
                ? "bg-white p-3 bg-opacity-50 rounded-4"
                : ""
            }
          >
            <button onClick={() => navigate("/populerplaces")}>
              <span>Tempat Populer</span>
            </button>
          </li>
          <li
            className={
              window.location.pathname === "/aboutus"
                ? "bg-white p-3 bg-opacity-50 rounded-4"
                : ""
            }
          >
            <button onClick={() => navigate("/aboutus")}>
              <span>Tentang Kami</span>
            </button>
          </li>
          <li className="ms-auto">
            {/* Tampilkan button Masuk atau Logout berdasarkan keberadaan token */}
            {token && user ? (
              <div className="profile">
                <div className="d-flex">
                  <span>{user.firstName}</span>
                  <i className="chevron-down" onClick={handleDropdown}></i>
                  <i className="user-avatar" onClick={handleDropdown}></i>
                </div>
                {dropdown && (
                  <div className="dropdown">
                    <div className="my-account">
                      <h5>Akun Saya</h5>
                      <div className="information">
                        <p>
                          <a href="/pesanan">Pesanan</a>
                        </p>
                        <p>Notifikasi Harga</p>
                        <p>Favorit</p>
                        <p>Data Penumpang Tersimpan</p>
                        <p>Ulasan</p>
                        <p>Profil</p>
                      </div>
                    </div>
                    <div className="my-account">
                      <h5>Pengaturan</h5>
                      <div className="information">
                        <p>
                          <a href="/profile">Pengaturan Akun</a>
                        </p>
                        <p>Bahasa Indonesia</p>
                      </div>
                    </div>
                    <Button
                      variant="danger"
                      className="logout"
                      onClick={handleLogout}
                    >
                      <BsPower className="icon-power-off" />
                      Keluar
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="login bg-white bg-opacity-50 rounded-4"
              >
                <span>Masuk</span>
              </Link>
            )}
          </li>
          <li className="register">
            {/* Tampilkan button Daftar atau tidak ada jika token ada */}
            {!user && <Link to="/register">Daftar</Link>}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
