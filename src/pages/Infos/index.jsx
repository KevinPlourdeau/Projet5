import { useState } from 'react'
import aboutList from '@datas/apropos.jsx'
import ToggleSection from '@components/ToggleSection'

function Infos() {
  const [activeIndices, setActiveIndices] = useState([])

  const toggleContent = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index],
    )
  }

  return (
    <section className="main">
      <div className="main__apropos1"></div>
      <div className="main__apropos2">
        {aboutList.map((item, index) => (
          <ToggleSection
            key={index}
            title={item.title}
            isActive={activeIndices.includes(index)}
            onToggle={() => toggleContent(index)}
          >
            <p>{item.content}</p>
          </ToggleSection>
        ))}
      </div>
    </section>
  )
}

export default Infos
