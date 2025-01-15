import { Link } from 'react-router-dom'
import quatrecentquatreD from '@assets/404D.png'
import quatrecentquatreM from '@assets/404M.png'

function Error() {
  return (
    <section className="main">
      <div className="main__error">
        <img
          className="main__error__quatrecentquatreD"
          src={quatrecentquatreD}
          alt="404 Red"
        ></img>
        <img
          className="main__error__quatrecentquatreM"
          src={quatrecentquatreM}
          alt="404 Red"
        ></img>
        <p className="main__error__text">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <Link className="main__error__link" to="/">
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </section>
  )
}

export default Error
