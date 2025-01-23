import ChevronR from '@assets/ChevronR.png'
import ChevronL from '@assets/ChevronL.png'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logements from '@datas/logements.json'

function Fiche() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeSections, setActiveSections] = useState([])

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

  const toggleSection = (section) => {
    if (activeSections.includes(section)) {
      setActiveSections(activeSections.filter((s) => s !== section))
    } else {
      setActiveSections([...activeSections, section])
    }
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
          <div className="main__accomodation__carousel__counter">
            {currentImageIndex + 1}/{logement.pictures.length}
          </div>
          {logement.pictures.length > 1 && (
            <>
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

        {/* Section pliable pour la description */}
        <div className="main__accomodation__de">
          <div className="main__accomodation__de__block">
            <h3 className="main__accomodation__de__block__title">
              Description
              <i
                onClick={() => toggleSection('description')}
                className={`fa-solid ${activeSections.includes('description') ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              ></i>
            </h3>
            {activeSections.includes('description') && (
              <div className="main__accomodation__de__block__content">
                <p>{logement.description}</p>
              </div>
            )}
          </div>

          {/* Section pliable pour les équipements */}
          <div className="main__accomodation__de__block">
            <h3 className="main__accomodation__de__block__title">
              Équipements
              <i
                onClick={() => toggleSection('equipment')}
                className={`fa-solid ${activeSections.includes('equipment') ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              ></i>
            </h3>
            {activeSections.includes('equipment') && (
              <div className="main__accomodation__de__block__content">
                <ul>
                  {logement.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fiche
