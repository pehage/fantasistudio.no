import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import SolidButtonexplore from '../components/solid-buttonexplore'
import PlaceCarddopa from '../components/place-carddopa'
import PlaceCardsiddemaal from '../components/place-cardsiddemaal'
import PlaceCardsideprojects from '../components/place-cardsideprojects'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Fantasistudio</title>
          <meta property="og:title" content="Fantasistudio" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e237ae09-b3fb-4a0e-8ed4-7af0226d1f8c/3dd1befe-82c8-4567-ad4f-e57a21c502ca?org_if_sml=1"
          />
        </Head>
        <div className="home-container1">
          <header data-role="Header" className="home-header">
            <img
              alt="image"
              src="/playground_assets/simple_text_logo-200h.png"
              className="home-image"
            />
            <div className="home-nav">
              <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
            </div>
            <div className="home-btn-group">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-nav1">
                <div className="home-container2">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="home-image1"
                  />
                  <div data-role="CloseMobileMenu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-top-container">
          <div className="home-hero">
            <div className="home-content-container">
              <h1 className="home-text">FANTASISTUDIO</h1>
              <h2 className="home-subheading">FantasiStudio Welcomes You</h2>
              <span className="home-text1">For All Your Music Needs</span>
              <SolidButtonexplore rootClassName="solid-buttonexplore-root-class-name"></SolidButtonexplore>
            </div>
          </div>
        </div>
        <div id="main-section" className="home-main">
          <h1>Our Discographies</h1>
          <span className="home-text3">Next Level Music</span>
          <div className="home-cards-container">
            <PlaceCarddopa rootClassName="place-carddopa-root-class-name"></PlaceCarddopa>
            <PlaceCardsiddemaal rootClassName="place-cardsiddemaal-root-class-name"></PlaceCardsiddemaal>
            <PlaceCardsideprojects rootClassName="place-cardsideprojects-root-class-name"></PlaceCardsideprojects>
          </div>
        </div>
        <div className="home-footer">
          <div className="home-menu">
            <div className="home-container3">
              <img
                alt="image"
                src="/playground_assets/logo_fs-200h.png"
                className="home-image2"
              />
            </div>
            <h1>FANTASISTUDIO</h1>
            <div className="home-links-container">
              <div className="home-container4">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  Tour packages
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link01"
                >
                  Personalized offers
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link02"
                >
                  Special deals
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link03"
                >
                  Summer holiday
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </a>
              </div>
              <div className="home-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  About us
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  FAQ
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  Terms and conditions
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link07"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="home-follow-container">
              <span className="home-text4">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-icons-container">
                <a
                  href="https://www.instagram.com/fantasistudiofs/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link08"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100081330472279"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link09"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon12"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link10"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 90px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-header {
            width: 1599px;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
          }
          .home-nav {
            display: flex;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-width: 0px;
            margin-right: 32px;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: 16px;
            height: 16px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: 16px;
            height: 16px;
          }
          .home-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .home-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .home-icon08 {
            width: 16px;
            height: 16px;
          }
          .home-top-container {
            width: 100%;
            height: 562px;
            display: flex;
            z-index: 100;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/ivar_art-1500w.png');
            background-position: 0% 40%;
          }
          .home-hero {
            width: 100%;
            height: 475px;
            display: flex;
            max-width: 1000px;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .home-content-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-family: Poppins;
            font-weight: 700;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }

          .home-subheading {
            color: var(--dl-color-gray-900);
          }
          .home-text1 {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-main {
            width: 100%;
            height: 613px;
            display: flex;
            position: relative;
            margin-top: 68px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text3 {
            color: var(--dl-color-gray-500);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-image2 {
            width: 100px;
            object-fit: cover;
          }
          .home-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container4 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .home-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-container5 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .home-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text4 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link08 {
            display: contents;
          }
          .home-icon10 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-link09 {
            display: contents;
          }
          .home-icon12 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-link10 {
            display: contents;
          }
          .home-icon14 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1200px) {
            .home-header {
              width: 1158px;
            }
          }
          @media (max-width: 991px) {
            .home-header {
              width: 990px;
            }
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-main {
              height: 1054px;
              padding-bottom: 0px;
            }
            .home-cards-container {
              height: 967px;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              width: 766px;
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-nav {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-hero {
              justify-content: center;
            }
            .home-content-container {
              align-items: center;
            }
            .home-text {
              font-size: 2.5rem;
            }
            .home-text1 {
              text-align: center;
            }
            .home-main {
              height: 599px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-cards-container {
              height: 610px;
              margin-bottom: 0px;
            }
            .home-menu {
              flex-direction: column;
            }
            .home-links-container {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .home-container4 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .home-container1 {
              height: 64px;
            }
            .home-header {
              width: 474px;
              padding: var(--dl-space-space-unit);
              padding-right: 1em;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-top-container {
              height: 393px;
            }
            .home-text {
              color: var(--dl-color-gray-white);
              font-size: 2rem;
              text-align: center;
            }
            .home-subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .home-main {
              height: 1551px;
            }
            .home-container3 {
              position: relative;
            }
            .home-image2 {
              top: -5px;
              left: -170px;
              width: 89px;
              height: 52px;
              position: absolute;
              align-self: flex-start;
            }
            .home-links-container {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .home-link {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link01 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link02 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link03 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-container5 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .home-link04 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link05 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link06 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link07 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-follow-container {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
