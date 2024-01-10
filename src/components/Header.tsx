import "./Header.css";

export default function Header() {
  // Mendapatkan token dari local storage
  const token = localStorage.getItem("token");

  // Fungsi untuk logout
  const handleLogout = () => {
    // Hapus token dari local storage
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header>
      <div className="bg-plane">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Tiket Pesawat</a>
            </li>
            <li>
              <a href="#">Tempat Populer</a>
            </li>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li className="ms-auto login">
              {/* Tampilkan button Masuk atau Logout berdasarkan keberadaan token */}
              {token ? (
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <a href="#">Masuk</a>
              )}
            </li>
            <li className="register">
              {/* Tampilkan button Daftar atau tidak ada jika token ada */}
              {!token && <a href="#">Daftar</a>}
            </li>
          </ul>
        </nav>
        <div className="title">
          <h1>Fly.id</h1>
          <h3>Dapatkan tiket terbaik untuk perjalanan Anda!</h3>
        </div>
      </div>
    </header>
  );
}
