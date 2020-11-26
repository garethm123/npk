import React, {useEffect, useState, useRef} from 'react'
import styles from "./component.module.scss";
// import openMenuIcon from '../public/images/hamburger.svg'
// import closeMenuIcon from '../public/images/close-rounded-white-18dp.svg'
// import logo from '../public/images/logoOCD-01.svg'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Nav from './Nav'

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
          <img 
            src="/images/logoOCD-01.svg" 
            className={styles.logo} 
            alt="OCD Logo"
          />
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