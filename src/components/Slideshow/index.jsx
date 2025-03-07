import { useState } from 'react'
import ChevronR from '@assets/ChevronR.png'
import ChevronL from '@assets/ChevronL.png'
import PropTypes from 'prop-types'

const Slideshow = ({ pictures, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className="main__accommodation__carousel">
      <img
        src={pictures[currentImageIndex]}
        alt={`Photo ${currentImageIndex + 1} de ${title}`}
        className="main__accommodation__carousel__image"
      />

      {pictures.length > 1 && (
        <>
          <div className="main__accommodation__carousel__counter">
            {currentImageIndex + 1}/{pictures.length}
          </div>
          <button
            className="main__accommodation__carousel__prev"
            onClick={prevImage}
          >
            <img className="Chevron Left" src={ChevronL} alt="Chevron Left" />
          </button>
          <button
            className="main__accommodation__carousel__next"
            onClick={nextImage}
          >
            <img className="Chevron Right" src={ChevronR} alt="Chevron Right" />
          </button>
        </>
      )}
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
}

export default Slideshow
