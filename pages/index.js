import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButtonlogin from '../components/solid-buttonlogin'
import SolidButtoncontactus from '../components/solid-buttoncontactus'
import SolidButtonexplore from '../components/solid-buttonexplore'
import PlaceCardsiddemaal from '../components/place-cardsiddemaal'
import PlaceCarddopa from '../components/place-carddopa'
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
          <div className="home-container2">
            <div className="home-container3">
              <nav data-role="Header" className="home-navbar">
                <h1 className="home-logo">FANTASISTUDIO</h1>
                <div className="home-right-side">
                  <div className="home-links-container">
                    <Link href="/">
                      <a className="home-link">Home</a>
                    </Link>
                    <Link href="/privat-for-gs">
                      <a className="home-link01">Privat for G&apos;s</a>
                    </Link>
                    <Link href="/dopa">
                      <a className="home-link02">
                        <span>DOPA</span>
                        <br></br>
                      </a>
                    </Link>
                    <Link href="/siddemaal">
                      <a className="home-link03">
                        <span>SIDDEMAAL</span>
                        <br></br>
                      </a>
                    </Link>
                    <Link href="/side-projects">
                      <a className="home-link05">Side Projects</a>
                    </Link>
                  </div>
                  <SolidButtonlogin rootClassName="solid-buttonlogin-root-class-name"></SolidButtonlogin>
                </div>
                <div data-role="BurgerMenu" className="home-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="home-burger-menu">
                    <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                    <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                    <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                  </svg>
                </div>
                <div data-role="MobileMenu" className="home-mobile-menu">
                  <div className="home-nav">
                    <div className="home-top">
                      <h1>Travel</h1>
                      <div
                        data-role="CloseMobileMenu"
                        className="home-close-menu"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon03">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="home-right-side1">
                      <div className="home-links-container1">
                        <span className="home-text04">Home</span>
                        <span className="home-text05">About</span>
                        <span className="home-text06">Tour Packages</span>
                        <span>Contact</span>
                      </div>
                      <a href="#main-section" className="home-link06">
                        <SolidButtoncontactus Contact_Us="Explore places"></SolidButtoncontactus>
                      </a>
                    </div>
                  </div>
                  <div className="home-follow-container">
                    <span className="home-text08">
                      Follow us on
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <div className="home-icons-container">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link07"
                      >
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="home-icon05"
                        >
                          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link08"
                      >
                        <svg
                          viewBox="0 0 602.2582857142856 1024"
                          className="home-icon07"
                        >
                          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link09"
                      >
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="home-icon09"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <SolidButtoncontactus rootClassName="solid-buttoncontactus-root-class-name11"></SolidButtoncontactus>
        </div>
        <div className="home-top-container">
          <div className="home-hero">
            <div className="home-content-container">
              <h1 className="home-text09">FANTASISTUDIO</h1>
              <h2 className="home-subheading">FantasiStudio Welcomes You</h2>
              <span className="home-text10">For All Your Music Needs</span>
              <SolidButtonexplore rootClassName="solid-buttonexplore-root-class-name"></SolidButtonexplore>
            </div>
          </div>
        </div>
        <div id="main-section" className="home-main">
          <h1>Our Discographies</h1>
          <span className="home-text12">Next Level Music</span>
          <div className="home-cards-container">
            <PlaceCardsiddemaal rootClassName="place-cardsiddemaal-root-class-name"></PlaceCardsiddemaal>
            <PlaceCarddopa rootClassName="place-carddopa-root-class-name"></PlaceCarddopa>
            <PlaceCardsideprojects rootClassName="place-cardsideprojects-root-class-name"></PlaceCardsideprojects>
          </div>
        </div>
        <div className="home-footer">
          <div className="home-menu">
            <div className="home-container4">
              <img
                alt="image"
                src="/playground_assets/logo_fs-200h.png"
                className="home-image"
              />
              <h1>FANTASISTUDIO</h1>
            </div>
            <div className="home-links-container2">
              <div className="home-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link10"
                >
                  Tour packages
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link11"
                >
                  Personalized offers
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12"
                >
                  Special deals
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13"
                >
                  Summer holiday
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </a>
              </div>
              <div className="home-container6">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  About us
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  FAQ
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  Terms and conditions
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link17"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="home-follow-container1">
              <span className="home-text13">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-icons-container1">
                <a
                  href="https://www.instagram.com/fantasistudiofs/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon11"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100081330472279"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link19"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon13"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link20"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon15"
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
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-navbar {
            width: 1104px;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            color: var(--dl-color-gray-black);
          }
          .home-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            color: var(--dl-color-gray-black);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link01 {
            color: var(--dl-color-gray-black);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link02 {
            color: var(--dl-color-gray-black);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link03 {
            color: var(--dl-color-gray-black);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link05 {
            color: var(--dl-color-gray-black);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            width: 24px;
            height: 24px;
          }
          .home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon03 {
            width: 24px;
            height: 24px;
          }
          .home-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text04 {
            margin-bottom: 8px;
          }
          .home-text05 {
            margin-bottom: 8px;
          }
          .home-text06 {
            margin-bottom: 8px;
          }
          .home-link06 {
            display: contents;
          }
          .home-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text08 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link07 {
            display: contents;
          }
          .home-icon05 {
            width: 24px;
            height: 24px;
          }
          .home-link08 {
            display: contents;
          }
          .home-icon07 {
            width: 24px;
            height: 24px;
          }
          .home-link09 {
            display: contents;
          }
          .home-icon09 {
            width: 24px;
            height: 24px;
          }
          .home-top-container {
            width: 100%;
            height: 493px;
            display: flex;
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
          .home-text09 {
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
          .home-text10 {
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
          .home-text12 {
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
          .home-container4 {
            flex: 0 0 auto;
            width: 100px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
          }
          .home-links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container5 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .home-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link13 {
            text-decoration: none;
          }
          .home-container6 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .home-link14 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link17 {
            text-decoration: none;
          }
          .home-follow-container1 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text13 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-icons-container1 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link18 {
            display: contents;
          }
          .home-icon11 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-link19 {
            display: contents;
          }
          .home-icon13 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-link20 {
            display: contents;
          }
          .home-icon15 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .home-right-side {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-hero {
              justify-content: center;
            }
            .home-content-container {
              align-items: center;
            }
            .home-text09 {
              font-size: 2.5rem;
            }
            .home-text10 {
              text-align: center;
            }
            .home-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-menu {
              flex-direction: column;
            }
            .home-links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .home-container5 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .home-text09 {
              font-size: 2rem;
              text-align: center;
            }
            .home-subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .home-links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .home-link10 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link11 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link12 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link13 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-container6 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .home-link14 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link15 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link16 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link17 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
