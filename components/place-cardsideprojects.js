import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const PlaceCardsideprojects = (props) => {
  return (
    <>
      <div
        className={`place-cardsideprojects-container ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image}
          className="place-cardsideprojects-image"
        />
        <div className="place-cardsideprojects-container1">
          <span className="place-cardsideprojects-text">
            {props.text_sideprojects}
          </span>
          <span className="place-cardsideprojects-text1">
            {props.description}
          </span>
          <Link href="/side-projects">
            <a className="place-cardsideprojects-link button Button">
              {props.button1}
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .place-cardsideprojects-container {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .place-cardsideprojects-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .place-cardsideprojects-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .place-cardsideprojects-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .place-cardsideprojects-text1 {
            font-size: 12px;
            max-width: 250px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .place-cardsideprojects-link {
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
          .place-cardsideprojects-root-class-name {
            height: auto;
            align-self: flex-end;
            margin-right: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .place-cardsideprojects-container {
              width: 200px;
            }
            .place-cardsideprojects-text1 {
              text-align: center;
            }
            .place-cardsideprojects-root-class-name {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .place-cardsideprojects-container {
              width: 300px;
            }
          }
        `}
      </style>
    </>
  )
}

PlaceCardsideprojects.defaultProps = {
  image_alt: 'image',
  image: '/playground_assets/logo_sideprojects-300h.png',
  text_sideprojects: 'Side Projects',
  rootClassName: '',
  description:
    'This spot has a fun and energetic vibe that’s sure to capture the attention of audiences.',
  button1: 'Check It Out!',
}

PlaceCardsideprojects.propTypes = {
  image_alt: PropTypes.string,
  image: PropTypes.string,
  text_sideprojects: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  button1: PropTypes.string,
}

export default PlaceCardsideprojects
