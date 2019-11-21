import PropTypes from 'prop-types'
import React from 'react'

const ALLOWED_CATEGORIES = ['picking']

const Tag = ({ category }) => {
  if (!ALLOWED_CATEGORIES.includes(category)) {
    throw `provided category ${category} is not in ${ALLOWED_CATEGORIES}`
  }
  const labelText = {
    picking: '⛏️',
  }[category]
  return (
    <div className={`tag ${category}`} title="Still picking at it">
      {labelText}
    </div>
  )
}

Tag.propTypes = {
  labelText: PropTypes.string,
}

Tag.defaultProps = {
  labelText: ``,
}

export default Tag
