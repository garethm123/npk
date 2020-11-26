import React, {useEffect, useState, useRef} from 'react'
import styles from "./component.module.scss";
// import openMenuIcon from '../public/images/hamburger.svg'
// import closeMenuIcon from '../public/images/close-rounded-white-18dp.svg'
// import logo from '../public/images/logoOCD-01.svg'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Nav from './Nav'
import Image from 'next/image'

const Header = () => {

  // Control menu open/close state
  const [menuOpen, setMenuOpen] = useState(false)

  // For animations
  const menutBtnVars = {
    open: {
      rotate: 180
    },
    close: {
      rotate:0
    }
  }
  const menuVars = {
    open: {
      left: 0,
      transition: {
        type: "spring",
        delay: 0,
        stiffness: 750,
        damping: 50,
        mass: 0.8,
        duration:0.4
      }
    },
    close: {
      left: "-105vw",
      transition: {
        delay: 0,
        stiffness: 750,
        damping: 50,
        mass: 0.8,
        duration:0.4
      }
    }
  }

  // Open and close the menu 
  const handleMenu = () => {
    setMenuOpen(state => !state)
  }
  
  // Close menu if user clicks on non-menu content
  const overlayClick = () => {
      setMenuOpen(false)
  }

  // Two main divs - First one for logo and menu buttons, second one for the slide-in menu.
  return (
    <>
    <div className={styles.headIcons}>
      {menuOpen ? 
        <motion.img 
          variants={menutBtnVars}
          animate={menuOpen ? "open" : "close"}
          src="/images/close-rounded-white-18dp.svg"
          onClick={handleMenu} 
          className={styles.hamburger}
          aria-label="Navigation toggle"
          aria-expanded="false"
        /> : 
        <motion.img 
          variants={menutBtnVars}
          animate={menuOpen ? "open" : "close"}
          src="/images/hamburger.svg" 
          onClick={handleMenu} 
          className={styles.hamburger}
          aria-label="Navigation toggle"
          aria-expanded="true"
        />
      }
      <Link href="/">
        <a>
          {/* <img 
            src="/images/logoOCD.svg" 
            className={styles.logo} 
            alt="OCD Logo"
            aria-label="Home"
            height="32"
            width="32"
          /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.77 121.68" className={styles.logo} aria-label="Home">
                <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path className="cls-1" d="M46.93,13.91A46.93,46.93,0,1,0,93.87,60.84,46.93,46.93,0,0,0,46.93,13.91Zm0,80a33,33,0,1,1,33-33A33,33,0,0,1,46.93,93.87Z"/>
                  <path className="cls-2" d="M46.93,80.4a19.56,19.56,0,0,1,0-39.12V27.81a33,33,0,0,0,0,66.06Z"/>
                  <path className="cls-2" d="M46.93,0V13.91a46.93,46.93,0,1,1,0,93.86v13.91A60.84,60.84,0,0,0,46.93,0Z"/>
                </g>
                </g>
              </svg>
        </a>
      </Link>
    </div>
    {menuOpen ? <div className={styles.scrim} onClick={overlayClick}></div>:null}
    <motion.div 
      className={styles.menu}
      initial={false}
      variants={menuVars}
      animate={menuOpen ? "open" : "close"}
    >
      <div className={styles.menuInner}>
        <Nav />
        <a 
          className={styles.npkLink}
          href="https://www.npkmedia.co.uk/" 
          target="_blank" 
          rel="noopener"
        >
          Website by NPK Media
        </a>
      </div>
    </motion.div>
    </>
  )
}
export default Header