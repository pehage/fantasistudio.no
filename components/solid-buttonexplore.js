import React from 'react'

import PropTypes from 'prop-types'

const SolidButtonexplore = (props) => {
  return (
    <>
      <div className={`solid-buttonexplore-container ${props.rootClassName} `}>
        <button className="solid-buttonexplore-contactus button Button">
          {props.Explore}
        </button>
      </div>
      <style jsx>
        {`
          .solid-buttonexplore-container {
            display: flex;
            position: relative;
          }
          .solid-buttonexplore-contactus {
            color: var(--dl-color-gray-white);
            border: none;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-primary-100);
          }
        `}
      </style>
    </>
  )
}

SolidButtonexplore.defaultProps = {
  Explore: 'Explore!',
  rootClassName: '',
}

SolidButtonexplore.propTypes = {
  Explore: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolidButtonexplore
