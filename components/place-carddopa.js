import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const PlaceCarddopa = (props) => {
  return (
    <>
      <div className={`place-carddopa-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image}
          className="place-carddopa-image"
        />
        <div className="place-carddopa-container1">
          <span className="place-carddopa-text">{props.text_dopa}</span>
          <span className="place-carddopa-text1">{props.description}</span>
          <Link href="/dopa">
            <a className="place-carddopa-link button Button">{props.button1}</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .place-carddopa-container {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .place-carddopa-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .place-carddopa-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .place-carddopa-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .place-carddopa-text1 {
            font-size: 12px;
            max-width: 250px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .place-carddopa-link {
            color: var(--dl-color-gray-black);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-100);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .place-carddopa-root-class-name {
            align-self: flex-start;
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .place-carddopa-container {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .place-carddopa-container {
              width: 300px;
            }
          }
        `}
      </style>
    </>
  )
}

PlaceCarddopa.defaultProps = {
  image: '/playground_assets/logo_dopa-300h.png',
  image_alt: 'image',
  text_dopa: 'DOPA',
  rootClassName: '',
  description:
    'A technically proficient group, Dopa makes an eclectic mix of hip hop, punk, pop, folk and electronic.',
  button1: 'Check It Out!',
}

PlaceCarddopa.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  text_dopa: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  button1: PropTypes.string,
}

export default PlaceCarddopa
