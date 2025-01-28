import ChevronR from '@assets/ChevronR.png'
import ChevronL from '@assets/ChevronL.png'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logements from '@datas/logements.json'
import ToggleSection from '@components/ToggleSection'

function Fiche() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState([])

  useEffect(() => {
    const foundLogement = logements.find((item) => item.id === id)
    if (foundLogement) {
      setLogement(foundLogement)
    }
  }, [id, navigate])

  if (!logement) {
    return <div className="loading">Chargement...</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1,
    )
  }

  const toggleSection = (Index) => {
    setActiveIndex((prevIndex) =>
      prevIndex.includes(Index)
        ? prevIndex.filter((s) => s !== Index)
        : [...prevIndex, Index],
    )
  }

  return (
    <section className="main">
      <div className="main__accomodation">
        <div className="main__accomodation__carousel">
          <img
            src={logement.pictures[currentImageIndex]}
            alt={`Photo ${currentImageIndex + 1} de ${logement.title}`}
            className="main__accomodation__carousel__image"
          />

          {logement.pictures.length > 1 && (
            <>
              <div className="main__accomodation__carousel__counter">
                {currentImageIndex + 1}/{logement.pictures.length}
              </div>
              <button
                className="main__accomodation__carousel__prev"
                onClick={prevImage}
              >
                <img
                  className="Chevron Left"
                  src={ChevronL}
                  alt="Chevron Left"
                ></img>
              </button>
              <button
                className="main__accomodation__carousel__next"
                onClick={nextImage}
              >
                <img
                  className="Chevron Right"
                  src={ChevronR}
                  alt="Chevron Right"
                ></img>
              </button>
            </>
          )}
        </div>
        {/* Block titre/location + host/rating */}
        <div className="main__accomodation__block">
          {/* Section titre + location + tags */}
          <div className="main__accomodation__block__tlt">
            <div className="main__accomodation__block__tlt__title">
              <h1>{logement.title}</h1>
            </div>
            <div className="main__accomodation__block__tlt__location">
              <p>{logement.location}</p>
            </div>
            {/* Section tags */}
            <div className="main__accomodation__block__tlt__tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Section host + rating */}
          <div className="main__accomodation__block__ht">
            <div className="main__accomodation__block__ht__host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="main__accomodation__block__ht__rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={
                    index < parseInt(logement.rating)
                      ? 'star filled'
                      : 'star empty'
                  }
                >
                  {index < parseInt(logement.rating) ? '★' : '★'}
                  {/* ☆ = test sans couleur */}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="main__accomodation__toggle">
          <div className="main__accomodation__toggle__block">
            <ToggleSection
              title="Description"
              isActive={activeIndex.includes('description')}
              onToggle={() => toggleSection('description')}
            >
              <p>{logement.description}</p>
            </ToggleSection>
          </div>
          <div className="main__accomodation__toggle__block">
            <ToggleSection
              title="Équipements"
              isActive={activeIndex.includes('equipment')}
              onToggle={() => toggleSection('equipment')}
            >
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ToggleSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fiche
