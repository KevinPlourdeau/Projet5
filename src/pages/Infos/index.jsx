import { useState } from 'react'
import aboutList from '@datas/apropos'
import ToggleSection from '@components/ToggleSection'

function Infos() {
  const [activeIndex, setActiveIndex] = useState([])

  const toggleContent = (index) => {
    setActiveIndex((prevIndex) =>
      prevIndex.includes(index)
        ? prevIndex.filter((i) => i !== index)
        : [...prevIndex, index],
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
            isActive={activeIndex.includes(index)}
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
