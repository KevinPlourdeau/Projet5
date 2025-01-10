import { Link } from 'react-router-dom'
import LogoR from '@assets/LogoR.png'
import LogoRL from '@assets/LogoRL.png'

function Header() {
  return (
    <section className="header">
      <img
        className="header__logoR"
        src={LogoR}
        alt="Logo Kasa Rouge desktop"
      ></img>
      <img
        className="header__logoRL"
        src={LogoRL}
        alt="Logo Kasa Rouge mobile"
      ></img>
      <nav className="header__nav">
        <Link to="/" className="header__nav__link header__nav__link--fontsize">
          Accueil
        </Link>
        <Link to="/Infos" className="header__nav__link--fontsize">
          A Propos
        </Link>
      </nav>
    </section>
  )
}

export default Header
