import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="main">
      <div className="main__error">
        <p className="main__error__404">404</p>
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
