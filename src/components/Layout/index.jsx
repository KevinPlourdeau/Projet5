import PropTypes from 'prop-types'
import Header from '@components/Header'
import Footer from '@components/Footer'

/*const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)*/

function Layout(children) {
  console.log(children)
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

// Validation des props
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
