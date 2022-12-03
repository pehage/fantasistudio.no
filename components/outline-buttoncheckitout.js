import React from 'react'

import PropTypes from 'prop-types'

const OutlineButtoncheckitout = (props) => {
  return (
    <>
      <div className="outline-buttoncheckitout-container">
        <button className="outline-buttoncheckitout-buttoncheckitout button Button">
          {props.button1}
        </button>
      </div>
      <style jsx>
        {`
          .outline-buttoncheckitout-container {
            display: flex;
            position: relative;
          }
          .outline-buttoncheckitout-buttoncheckitout {
            color: var(--dl-color-gray-black);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-100);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-white);
          }
        `}
      </style>
    </>
  )
}

OutlineButtoncheckitout.defaultProps = {
  button1: 'Check It Out!',
}

OutlineButtoncheckitout.propTypes = {
  button1: PropTypes.string,
}

export default OutlineButtoncheckitout
