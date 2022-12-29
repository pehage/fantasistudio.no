import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const PrivatForGs = (props) => {
  return (
    <>
      <div className="privat-for-gs-container">
        <Head>
          <title>FS | Privat For G's</title>
          <meta property="og:title" content="FS | Privat For G's" />
        </Head>
        <div className="privat-for-gs-container1">
          <header data-role="Header" className="privat-for-gs-header">
            <img
              alt="image"
              src="/playground_assets/simple_text_logo-200h.png"
              className="privat-for-gs-image"
            />
            <div className="privat-for-gs-nav">
              <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
            </div>
            <div className="privat-for-gs-btn-group">
              <button className="privat-for-gs-login button">Login</button>
              <button className="button">Register</button>
            </div>
            <div data-role="BurgerMenu" className="privat-for-gs-burger-menu">
              <svg viewBox="0 0 1024 1024" className="privat-for-gs-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="privat-for-gs-mobile-menu">
              <div className="privat-for-gs-nav1">
                <div className="privat-for-gs-container2">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="privat-for-gs-image1"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="privat-for-gs-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="privat-for-gs-icon02"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName15"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="privat-for-gs-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="privat-for-gs-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="privat-for-gs-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="privat-for-gs-footer">
          <div className="privat-for-gs-menu">
            <div className="privat-for-gs-container3">
              <img
                alt="image"
                src="/playground_assets/logo_fs-200h.png"
                className="privat-for-gs-image2"
              />
              <h1>FANTASISTUDIO</h1>
            </div>
            <div className="privat-for-gs-links-container">
              <div className="privat-for-gs-container4">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link"
                >
                  Tour packages
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link01"
                >
                  Personalized offers
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link02"
                >
                  Special deals
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link03"
                >
                  Summer holiday
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </a>
              </div>
              <div className="privat-for-gs-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link04"
                >
                  About us
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link05"
                >
                  FAQ
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link06"
                >
                  Terms and conditions
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link07"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="privat-for-gs-follow-container">
              <span className="privat-for-gs-text">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="privat-for-gs-icons-container">
                <a
                  href="https://www.instagram.com/fantasistudiofs/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link08"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="privat-for-gs-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100081330472279"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link09"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="privat-for-gs-icon12"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link10"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="privat-for-gs-icon14"
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
          .privat-for-gs-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .privat-for-gs-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 90px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .privat-for-gs-header {
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
          .privat-for-gs-image {
            width: 100px;
            object-fit: cover;
          }
          .privat-for-gs-nav {
            display: flex;
          }
          .privat-for-gs-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-login {
            border-width: 0px;
            margin-right: 32px;
          }
          .privat-for-gs-burger-menu {
            display: none;
          }
          .privat-for-gs-icon {
            width: 16px;
            height: 16px;
          }
          .privat-for-gs-mobile-menu {
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
          .privat-for-gs-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .privat-for-gs-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .privat-for-gs-image1 {
            height: 2rem;
          }
          .privat-for-gs-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .privat-for-gs-icon02 {
            width: 16px;
            height: 16px;
          }
          .privat-for-gs-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .privat-for-gs-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .privat-for-gs-icon08 {
            width: 16px;
            height: 16px;
          }
          .privat-for-gs-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .privat-for-gs-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-container3 {
            flex: 0 0 auto;
            width: 100px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .privat-for-gs-image2 {
            width: 100px;
            object-fit: cover;
          }
          .privat-for-gs-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-container4 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .privat-for-gs-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .privat-for-gs-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .privat-for-gs-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .privat-for-gs-link03 {
            text-decoration: none;
          }
          .privat-for-gs-container5 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .privat-for-gs-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .privat-for-gs-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .privat-for-gs-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .privat-for-gs-link07 {
            text-decoration: none;
          }
          .privat-for-gs-follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .privat-for-gs-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .privat-for-gs-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-link08 {
            display: contents;
          }
          .privat-for-gs-icon10 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .privat-for-gs-link09 {
            display: contents;
          }
          .privat-for-gs-icon12 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .privat-for-gs-link10 {
            display: contents;
          }
          .privat-for-gs-icon14 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1200px) {
            .privat-for-gs-header {
              width: 1158px;
            }
          }
          @media (max-width: 991px) {
            .privat-for-gs-header {
              width: 990px;
            }
          }
          @media (max-width: 767px) {
            .privat-for-gs-header {
              width: 766px;
              padding-left: 32px;
              padding-right: 32px;
            }
            .privat-for-gs-nav {
              display: none;
            }
            .privat-for-gs-btn-group {
              display: none;
            }
            .privat-for-gs-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .privat-for-gs-menu {
              flex-direction: column;
            }
            .privat-for-gs-links-container {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .privat-for-gs-container4 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .privat-for-gs-container1 {
              height: 64px;
            }
            .privat-for-gs-header {
              width: 474px;
              padding: var(--dl-space-space-unit);
            }
            .privat-for-gs-mobile-menu {
              padding: 16px;
            }
            .privat-for-gs-links-container {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .privat-for-gs-link {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-link01 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-link02 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-link03 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-container5 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .privat-for-gs-link04 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-link05 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-link06 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-link07 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privat-for-gs-follow-container {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default PrivatForGs
