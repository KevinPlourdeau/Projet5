import { NavLink } from 'react-router-dom'
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'header__nav__link header__nav__link--active header__nav__link--fontsize'
              : 'header__nav__link header__nav__link--fontsize'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/Infos"
          className={({ isActive }) =>
            isActive
              ? 'header__nav__link header__nav__link--active header__nav__link--fontsize'
              : 'header__nav__link header__nav__link--fontsize'
          }
        >
          A Propos
        </NavLink>
      </nav>
    </section>
  )
}

export default Header
