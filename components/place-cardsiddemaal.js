import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const PlaceCardsiddemaal = (props) => {
  return (
    <>
      <div className={`place-cardsiddemaal-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image}
          className="place-cardsiddemaal-image"
        />
        <div className="place-cardsiddemaal-container1">
          <span className="place-cardsiddemaal-text">{props.text_dopa}</span>
          <span className="place-cardsiddemaal-text1">{props.description}</span>
          <Link href="/siddemaal">
            <a className="place-cardsiddemaal-link button Button">
              {props.button1}
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .place-cardsiddemaal-container {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .place-cardsiddemaal-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .place-cardsiddemaal-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .place-cardsiddemaal-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .place-cardsiddemaal-text1 {
            font-size: 12px;
            max-width: 250px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .place-cardsiddemaal-link {
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

          @media (max-width: 767px) {
            .place-cardsiddemaal-container {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .place-cardsiddemaal-container {
              width: 300px;
            }
          }
        `}
      </style>
    </>
  )
}

PlaceCardsiddemaal.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  description:
    'Siddemaal is a group that breaks boundaries and pushes genre conventions as far as it can possibly go.',
  image: '/playground_assets/logo_siddemaal._2-300h.png',
  button1: 'Check It Out!',
  text_dopa: 'SIDDEMAAL',
}

PlaceCardsiddemaal.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  button1: PropTypes.string,
  text_dopa: PropTypes.string,
}

export default PlaceCardsiddemaal
