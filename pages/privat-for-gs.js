import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButtoncontactus from '../components/solid-buttoncontactus'

const PrivatForGs = (props) => {
  return (
    <>
      <div className="privat-for-gs-container">
        <Head>
          <title>Privat-for-Gs - Travel Agency</title>
          <meta property="og:title" content="Privat-for-Gs - Travel Agency" />
        </Head>
        <nav data-role="Header" className="privat-for-gs-navbar">
          <h1>FANTASISTUDIO</h1>
          <div className="privat-for-gs-right-side">
            <div className="privat-for-gs-links-container">
              <Link href="/">
                <a className="privat-for-gs-link">Home</a>
              </Link>
              <Link href="/privat-for-gs">
                <a className="privat-for-gs-link01">Privat for G&apos;s</a>
              </Link>
              <Link href="/d-o-p-a">
                <a className="privat-for-gs-link02">
                  <span>DOPA</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/s-i-d-d-e-m-a-a-l">
                <a className="privat-for-gs-link03">
                  <span>SIDDEMAAL</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/side-projects">
                <a className="privat-for-gs-link05">Side Projects</a>
              </Link>
            </div>
            <SolidButtoncontactus rootClassName="solid-buttoncontactus-root-class-name"></SolidButtoncontactus>
          </div>
          <div data-role="BurgerMenu" className="privat-for-gs-burger-menu">
            <svg viewBox="0 0 1024 1024" className="privat-for-gs-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="privat-for-gs-mobile-menu">
            <div className="privat-for-gs-nav">
              <div className="privat-for-gs-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="privat-for-gs-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="privat-for-gs-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="privat-for-gs-right-side1">
                <div className="privat-for-gs-links-container1">
                  <span className="privat-for-gs-text4">Home</span>
                  <span className="privat-for-gs-text5">About</span>
                  <span className="privat-for-gs-text6">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="privat-for-gs-link06">
                  <SolidButtoncontactus Contact_Us="Explore places"></SolidButtoncontactus>
                </a>
              </div>
            </div>
            <div className="privat-for-gs-follow-container">
              <span className="privat-for-gs-text8">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="privat-for-gs-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link07"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="privat-for-gs-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link08"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="privat-for-gs-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privat-for-gs-link09"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="privat-for-gs-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
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
          .privat-for-gs-navbar {
            width: 1104px;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-link {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .privat-for-gs-link01 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .privat-for-gs-link02 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .privat-for-gs-link03 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .privat-for-gs-link05 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .privat-for-gs-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-burger-menu {
            width: 24px;
            height: 24px;
          }
          .privat-for-gs-mobile-menu {
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
          .privat-for-gs-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .privat-for-gs-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .privat-for-gs-icon03 {
            width: 24px;
            height: 24px;
          }
          .privat-for-gs-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .privat-for-gs-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .privat-for-gs-text4 {
            margin-bottom: 8px;
          }
          .privat-for-gs-text5 {
            margin-bottom: 8px;
          }
          .privat-for-gs-text6 {
            margin-bottom: 8px;
          }
          .privat-for-gs-link06 {
            display: contents;
          }
          .privat-for-gs-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .privat-for-gs-text8 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .privat-for-gs-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .privat-for-gs-link07 {
            display: contents;
          }
          .privat-for-gs-icon05 {
            width: 24px;
            height: 24px;
          }
          .privat-for-gs-link08 {
            display: contents;
          }
          .privat-for-gs-icon07 {
            width: 24px;
            height: 24px;
          }
          .privat-for-gs-link09 {
            display: contents;
          }
          .privat-for-gs-icon09 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 767px) {
            .privat-for-gs-right-side {
              display: none;
            }
            .privat-for-gs-burger-menu {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

export default PrivatForGs
