import { useState } from 'react'
import aboutList from '@datas/apropos.jsx'

function Infos() {
  const [activeIndices, setActiveIndices] = useState([]) // Stocke les indices des éléments ouverts

  const toggleContent = (index) => {
    if (activeIndices.includes(index)) {
      // Si l'index est déjà actif, on le retire
      setActiveIndices(activeIndices.filter((i) => i !== index))
    } else {
      // Sinon, on l'ajoute
      setActiveIndices([...activeIndices, index])
    }
  }

  return (
    <section className="main">
      <div className="main__apropos1"></div>
      <div className="main__apropos2">
        {aboutList.map((item, index) => (
          <div key={index} className="main__apropos2__item">
            <p className="main__apropos2__item__title">
              {item.title}{' '}
              <i
                onClick={() => toggleContent(index)}
                className={`fa-solid ${activeIndices.includes(index) ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              ></i>
            </p>
            {activeIndices.includes(index) && (
              <div className="main__apropos2__item__content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Infos
