import React from 'react'

import PropTypes from 'prop-types'

const SolidButtoncontactus = (props) => {
  return (
    <>
      <div
        className={`solid-buttoncontactus-container ${props.rootClassName} `}
      >
        <button className="solid-buttoncontactus-contactus button Button">
          {props.Contact_Us}
        </button>
      </div>
      <style jsx>
        {`
          .solid-buttoncontactus-container {
            display: flex;
            position: relative;
          }
          .solid-buttoncontactus-contactus {
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

SolidButtoncontactus.defaultProps = {
  Contact_Us: 'Contact Us!',
  rootClassName: '',
}

SolidButtoncontactus.propTypes = {
  Contact_Us: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolidButtoncontactus
