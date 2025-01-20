import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from '@pages/Home/'
import Fiche from '@pages/Fiche'
import Infos from '@pages/Infos'
import Header from '@components/Header'
import Error from '@components/Error'
import Footer from '@components/Footer'
import '@styles/styles.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fiche/:id" element={<Fiche />} />
        <Route path="/Infos" element={<Infos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
