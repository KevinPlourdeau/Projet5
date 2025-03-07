import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import Fiche from '@pages/Fiche'
import Infos from '@pages/Infos'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Error from '@components/Error'

const AppRouter = () => {
  return (
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
  )
}

export default AppRouter
