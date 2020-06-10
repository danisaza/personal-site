import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `none`,
      marginBottom: `0.2rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3rem 1.0875rem`,
      }}
    >
      <div className="flex justify-between items-baseline">
        <div className="">
          <h1
            className="align-text-bottom hover:underline"
            style={{
              margin: 0,
            }}
          >
            <Link
              to="/"
              style={{
                color: `#444444`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="">
          <h2 className="text-center align-text-bottom hover:underline">
            <Link
              to="/reading"
              style={{
                color: `#444444`,
                textDecoration: `none`,
              }}
            >
              reading
            </Link>
          </h2>
        </div>
        <div className="">
          <h2 className="text-right hover:underline">
            <Link
              to="/podcasts"
              style={{
                color: `#444444`,
              }}
            >
              podcasts
            </Link>
          </h2>
        </div>
        <div className="">
          <h2 className="text-right hover:underline">
            <Link
              to="/writing"
              style={{
                color: `#444444`,
              }}
            >
              writing
            </Link>
          </h2>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
