import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ currPage }) => {
  const unselectedColor = 'bg-gray-200'
  const selectedColor = 'bg-gray-400'
  const getColor = pageName =>
    pageName === currPage ? selectedColor : unselectedColor
  console.log('currPage', currPage)

  const items = ['Reading', 'Podcasts', 'Writing'].map(x => (
    <Link
      to={`${x.toLowerCase()}`}
      className={`${getColor(x)}`}
      style={{
        color: `#444444`,
        textDecoration: `none`,
      }}
    >
      <div className={`pt-7 ${getColor(x)}`}>{x}</div>
    </Link>
  ))

  return (
    <div className="grid grid-cols-3 text-lg bg-gray-100 text-center sm:invisible fixed bottom-0 w-full h-20">
      {items}
    </div>
  )
}
Footer.propTypes = {
  currPage: PropTypes.string,
}

Footer.defaultProps = {
  currPage: ``,
}

export default Footer
