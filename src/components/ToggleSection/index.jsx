import PropTypes from 'prop-types'

function ToggleSection({ title, children, isActive, onToggle }) {
  return (
    <div className="toggle-section__item">
      <h3
        className={`toggle-section__item__title ${
          isActive ? 'rotate-left' : 'rotate-right'
        }`}
        onClick={onToggle}
      >
        {title}
        <i className="fa-solid fa-chevron-up"></i>
      </h3>
      {isActive && (
        <div className="toggle-section__item__content">{children}</div>
      )}
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
