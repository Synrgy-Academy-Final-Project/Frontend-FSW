import { useEffect, useState } from 'react'
import './Header.css'
import TicketSearch from './TicketSearch'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { BsPower } from 'react-icons/bs'
interface Header {
  label?: string
}
interface User {
  firstName?: string
  lastName?: string
}

export default function Header(props) {
  const token = localStorage.getItem('token')

  const base_url = 'https://fly-id-1999ce14c36e.herokuapp.com'

  const [user, setUser] = useState<User>(null)
  const [dropdown, setDropdown] = useState<boolean>(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(base_url + '/user-detail/logged-in-user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.status === 500) throw new Error('Token tidak valid!')

        const responseJson = await response.json()

        if (response.status === 200) {
          setUser({
            firstName: responseJson.data.firstName,
            lastName: responseJson.data.lastName,
          })
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (token) {
      fetchUser()
    }
  }, [token])

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
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="login bg-white bg-opacity-50 rounded-4"
                >
                  <span>Masuk</span>
                </Link>
              )}
            </li>
            <li className='register'>
              {/* Tampilkan button Daftar atau tidak ada jika token ada */}
              {!token && <a href="/register">Daftar</a>}
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
