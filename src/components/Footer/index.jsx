import LogoB from '@assets/LogoB.png'

function Footer() {
  return (
    <section className="footer">
      <img className="footer__logob" src={LogoB} alt="logo Kasa blanc"></img>
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </section>
  )
}

export default Footer
