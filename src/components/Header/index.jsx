import { Link } from 'react-router-dom'
import LogoR from '../../assets/LogoR.png'

function Header() {
  return (
    <div>
      <img src={LogoR} alt="Logo Kasa Rouge"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Infos">A Propos</Link>
        <Link to="/Fiche">Fiche</Link>
      </nav>
    </div>
  )
}

export default Header
