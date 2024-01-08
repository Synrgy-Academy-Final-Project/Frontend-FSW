import { Route, Routes } from 'react-router-dom'
import LoginAdmin from './pages/Admin/Login/LoginAdmin'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LoginAdmin />} />
                <Route path='/header' element={<Header />} />
                <Route path='/footer' element={<Footer />} />
            </Routes>
        </>
    )
}

export default App
