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

  // Fonction pour afficher l'image précédente
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
      <div className="main__fiche">
        <div className="main__fiche__carousel">
          <img
            src={logement.pictures[currentImageIndex]}
            alt={`Photo ${currentImageIndex + 1} de ${logement.title}`}
            className="main__fiche__carousel__image"
          />
          {logement.pictures.length > 1 && (
            <>
              <button
                className="main__fiche__carousel__prev"
                onClick={prevImage}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="main__fiche__carousel__next"
                onClick={nextImage}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        <div className="main__fiche__title">
          <h1>{logement.title}</h1>
        </div>
        <div className="main__fiche__location">
          <p>{logement.location}</p>
        </div>

        <div className="main__fiche__host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>

        <div className="main__fiche__tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="main__fiche__rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={
                index < parseInt(logement.rating) ? 'star filled' : 'star empty'
              }
            >
              {index < parseInt(logement.rating) ? '★' : '☆'}
            </span>
          ))}
        </div>

        {/* Section pliable pour la description */}
        <div className="main__fiche__section">
          <h3
            className="main__fiche__section--h3"
            onClick={() => toggleSection('description')}
          >
            Description
            <i
              className={`fa-solid ${activeSections.includes('description') ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            ></i>
          </h3>
          {activeSections.includes('description') && (
            <div className="main__fiche__description__content">
              <p>{logement.description}</p>
            </div>
          )}
        </div>

        {/* Section pliable pour les équipements */}
        <div className="main__fiche__section">
          <h3
            className="main__fiche__section--h3"
            onClick={() => toggleSection('equipment')}
          >
            Équipements
            <i
              className={`fa-solid ${activeSections.includes('equipment') ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            ></i>
          </h3>
          {activeSections.includes('equipment') && (
            <div className="main__fiche__section__content">
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Fiche
