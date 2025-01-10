import { Link } from 'react-router-dom'
import quatrecentquatreD from '@assets/404D.png'
import quatrecentquatreM from '@assets/404M.png'

function Error() {
  return (
    <section className="main">
      <img src={quatrecentquatreD}></img>
      <img src={quatrecentquatreM}></img>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </section>
  )
}

export default Error
