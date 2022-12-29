import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link">{props.home}</a>
        </Link>
        <Link href="/siddemaal">
          <a className="navigation-links-link1">{props.SIDDEMAAL}</a>
        </Link>
        <Link href="/dopa">
          <a className="navigation-links-link2">{props.DOPA}</a>
        </Link>
        <Link href="/side-projects">
          <a className="navigation-links-link3">{props.Sideprojects}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            text-decoration: none;
          }
          .navigation-links-link1 {
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links-link2 {
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links-link3 {
            margin-left: 32px;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  home: 'Home',
  rootClassName: '',
  DOPA: 'DOPA',
  SIDDEMAAL: 'SIDDEMAAL',
  Sideprojects: 'Side Projects',
}

NavigationLinks.propTypes = {
  home: PropTypes.string,
  rootClassName: PropTypes.string,
  DOPA: PropTypes.string,
  SIDDEMAAL: PropTypes.string,
  Sideprojects: PropTypes.string,
}

export default NavigationLinks
