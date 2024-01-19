import './Header.css'

export default function Header() {
    const token = localStorage.getItem('token')
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
                            <a
                                className={
                                    window.location.pathname === '/' ? 'bg-white p-3 bg-opacity-50 rounded-4' : ''
                                }
                                href='/'>
                                <span>Beranda</span>
                            </a>
                        </li>
                        <li
                            className={
                                window.location.pathname === '/list-ticket'
                                    ? 'bg-white p-3 bg-opacity-50 rounded-4'
                                    : ''
                            }>
                            <a href='/list-ticket'>
                                <span>Tiket Pesawat</span>
                            </a>
                        </li>
                        <li
                            className={
                                window.location.pathname === '/populerplaces'
                                    ? 'bg-white p-3 bg-opacity-50 rounded-4'
                                    : ''
                            }>
                            <a href='/populerplaces'>
                                <span>Tempat Populer</span>
                            </a>
                        </li>
                        <li
                            className={
                                window.location.pathname === '/aboutus' ? 'bg-white p-3 bg-opacity-50 rounded-4' : ''
                            }>
                            <a href='/aboutus'>
                                <span>Tentang Kami</span>
                            </a>
                        </li>
                        <li className='ms-auto'>
                            {/* Tampilkan button Masuk atau Logout berdasarkan keberadaan token */}
                            {token ? (
                                <button className='logout' onClick={handleLogout}>
                                    Logout
                                </button>
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
                    <h1>Fly.id</h1>
                    <h3>Dapatkan tiket terbaik untuk perjalanan Anda!</h3>
                </div>
            </div>
        </header>
    )
}
