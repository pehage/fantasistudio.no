import React from 'react'

import PropTypes from 'prop-types'

const SolidButtonlogin = (props) => {
  return (
    <>
      <div className={`solid-buttonlogin-container ${props.rootClassName} `}>
        <button className="solid-buttonlogin-contactus button Button">
          {props.login}
        </button>
      </div>
      <style jsx>
        {`
          .solid-buttonlogin-container {
            display: flex;
            position: relative;
          }
          .solid-buttonlogin-contactus {
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

SolidButtonlogin.defaultProps = {
  rootClassName: '',
  login: 'Log In',
}

SolidButtonlogin.propTypes = {
  rootClassName: PropTypes.string,
  login: PropTypes.string,
}

export default SolidButtonlogin
