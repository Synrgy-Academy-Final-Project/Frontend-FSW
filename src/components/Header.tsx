import { useState } from 'react'
import './Header.css'
import TicketSearch from './TicketSearch'
interface Header {
  label?: string
}
export default function Header(props) {
  const token = localStorage.getItem('token')

  const [dropdown, setDropdown] = useState<boolean>(false)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleLogout = () => {
    // Hapus token dari local storage
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <header>
      <div className='bg-plane'>
        <nav>
          <ul className='nav-list'>
            <li>
              <a className={window.location.pathname === '/' ? 'bg-white p-3 bg-opacity-50 rounded-4' : ''} href='/'>
                <span>Beranda</span>
              </a>
            </li>
            <li className={window.location.pathname === '/list-ticket' ? 'bg-white p-3 bg-opacity-50 rounded-4' : ''}>
              <a href='/list-ticket'>
                <span>Tiket Pesawat</span>
              </a>
            </li>
            <li className={window.location.pathname === '/populerplaces' ? 'bg-white p-3 bg-opacity-50 rounded-4' : ''}>
              <a href='/populerplaces'>
                <span>Tempat Populer</span>
              </a>
            </li>
            <li className={window.location.pathname === '/aboutus' ? 'bg-white p-3 bg-opacity-50 rounded-4' : ''}>
              <a href='/aboutus'>
                <span>Tentang Kami</span>
              </a>
            </li>
            <li className='ms-auto'>
              {/* Tampilkan button Masuk atau Logout berdasarkan keberadaan token */}
              {token ? (
                <div className='profile'>
                  <div className='d-flex'>
                    <span>Lorem</span>
                    <i className='chevron-down' onClick={handleDropdown}></i>
                    <i className='user-avatar' onClick={handleDropdown}></i>
                  </div>
                  {dropdown && (
                    <div className='dropdown'>
                      <div className='dropdown-account'>
                        <div className='my-account'>
                          <h5>Akun Saya</h5>
                          <div className='information'>
                            <p>Pesanan</p>
                            <p>Notifikasi Harga</p>
                            <p>Favorit</p>
                            <p>Data Penumpang Tersimpan</p>
                            <p>Ulasan</p>
                            <p>Profil</p>
                          </div>
                        </div>
                        <div className='my-account'>
                          <h5>Pengaturan</h5>
                          <div className='information'>
                            <p>Pengaturan Akun</p>
                            <p>Bahasa Indonesia</p>
                            <p>IDR Rp</p>
                          </div>
                        </div>
                      </div>
                      <button className='logout' onClick={handleLogout}>
                        <i className='power-off'></i>
                        Keluar
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a className='login bg-white bg-opacity-50 rounded-4' href='/login'>
                  <span>Masuk</span>
                </a>
              )}
            </li>
            <li className='register'>
              {/* Tampilkan button Daftar atau tidak ada jika token ada */}
              {!token && <a href='/register'>Daftar</a>}
            </li>
          </ul>
        </nav>
        <div className='title'>
          {props.label === 'LIST-TICKET' ? (
            <>
              <h1>TIKET PESAWAT</h1>
            </>
          ) : (
            <>
              <h1>Fly.id</h1>
              <h3 className='pb-5'>Dapatkan tiket terbaik untuk perjalanan Anda!</h3>
            </>
          )}
          <TicketSearch></TicketSearch>
        </div>
      </div>
    </header>
  )
}
