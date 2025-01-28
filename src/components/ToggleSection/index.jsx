import PropTypes from 'prop-types'

function ToggleSection({ title, children, isActive, onToggle }) {
  return (
    <div className="toggle-section__item">
      <h3
        className={`toggle-section__item__title ${
          isActive ? 'rotate-left' : 'rotate-right'
        }`}
      >
        {title}
        <i onClick={onToggle} className="fa-solid fa-chevron-up"></i>
      </h3>
      <div
        className={`toggle-section__item__content-wrapper ${
          isActive ? 'toggle-section__item__content-wrapper--active' : ''
        }`}
      >
        <div className="toggle-section__item__content">{children}</div>
      </div>
    </div>
  )
}

ToggleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default ToggleSection
