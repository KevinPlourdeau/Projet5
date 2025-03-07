import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logements from '@datas/logements.json'
import ToggleSection from '@components/ToggleSection'
import Slideshow from '@components/Slideshow'

function Fiche() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)
  const [activeIndex, setActiveIndex] = useState([])

  useEffect(() => {
    const foundLogement = logements.find((item) => item.id === id)
    if (foundLogement) {
      setLogement(foundLogement)
    } else {
      navigate('*')
    }
  }, [id, navigate])

  if (!logement) {
    return <div className="loading">Chargement...</div>
  }

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) =>
      prevIndex.includes(index)
        ? prevIndex.filter((s) => s !== index)
        : [...prevIndex, index],
    )
  }

  return (
    <section className="main">
      <div className="main__accommodation">
        {/* Slideshow Component */}
        <Slideshow pictures={logement.pictures} title={logement.title} />

        {/* Block titre/location + host/rating */}
        <div className="main__accommodation__block">
          {/* Section titre + location + tags */}
          <div className="main__accommodation__block__tlt">
            <h2 className="main__accommodation__block__tlt__title">
              {logement.title}
            </h2>
            <p className="main__accommodation__block__tlt__location">
              {logement.location}
            </p>
            {/* Tags */}
            <div className="main__accommodation__block__tlt__tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Section host + rating */}
          <div className="main__accommodation__block__ht">
            <div className="main__accommodation__block__ht__host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="main__accommodation__block__ht__rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={
                    index < parseInt(logement.rating)
                      ? 'star filled'
                      : 'star empty'
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sections Toggle: Description & Équipements */}
        <div className="main__accommodation__toggle">
          <div className="main__accommodation__toggle__block">
            <ToggleSection
              title="Description"
              isActive={activeIndex.includes('description')}
              onToggle={() => toggleSection('description')}
            >
              <p>{logement.description}</p>
            </ToggleSection>
          </div>
          <div className="main__accommodation__toggle__block">
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
