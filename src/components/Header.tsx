import './Header.css'

export default function Header() {
    return (
        <header>
            <div className='bg-plane'>
                <nav>
                    <ul className='nav-list'>
                        <li>
                            <a href='#'>Beranda</a>
                        </li>
                        <li>
                            <a href='#'>Tiket Pesawat</a>
                        </li>
                        <li>
                            <a href='#'>Tempat Populer</a>
                        </li>
                        <li>
                            <a href='#'>Tentang Kami</a>
                        </li>
                        <li className='ms-auto login'>
                            <a href='#'>Masuk</a>
                        </li>
                        <li className='register'>
                            <a href='#'>Daftar</a>
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
