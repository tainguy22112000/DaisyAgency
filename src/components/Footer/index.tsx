import React from 'react'
import styles from './styles.module.scss'
import { Basketball, BehanceIcon, DiscordIcon, FacebookIcon, InstagramIcon, Logo, TwitterIcon } from '~/assets/icon'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
      <div className={styles.footerinfo}>
        <div className={styles.info}>
          <div>
            <Logo/>
          </div>
          <div>
            <p>Adress: 12 Pham Van Hai, Ward 12, Tan Binh, HCMC</p>
          </div>
          <div>
            <p>Email: info@company.com.vn</p>
          </div>
          <div>
            <p>Working time: 8:00am - 5:30pm (Mon - Sat)</p>
          </div>
          <div>
            <p>Contact: (+84)123456789 </p>
          </div>
        </div>
        <div className={styles.info}>
          <div >
            <NavLink to="/about" className={styles.title}>About Us</NavLink>
          </div>
          <div>
            <p>Introduce</p>
          </div>
          <div>
            <p>Why choose us</p>
          </div>
          <div>
            <p>Our culture</p>
          </div>
          <div>
            <p>Process</p>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <NavLink to="/solution" className={styles.title}>Solutions & Services</NavLink>
          </div>
          <div>
            <p>IT system administration</p>
          </div>
          <div>
            <p>Infrastructure - network solutions</p>
          </div>
          <div>
            <p>System maintenance</p>
          </div>
          <div>
            <p>Server & Storage Solutions</p>
          </div>
          <div>
            <p>Information security & safety solutions</p>
          </div>
          <div>
            <p>Data center solutions</p>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <NavLink to="/contact" className={styles.title}>Customer Service</NavLink>
          </div>
          <div>
            <p>Introduce</p>
          </div>
          <div>
            <p>Privacy policy</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
          <div>
            <p>Support 24/7: (+84)123456789</p>
          </div>
        </div>
      </div>
      <div className={styles.moreinfo}>
        <div className={styles.copyright}>© Copyright 2021-2022</div>
        <div className={styles.shortenlink}>
          <div>
            <FacebookIcon/>
          </div>
          <div>
            <InstagramIcon/>
          </div>
          <div>
            <TwitterIcon/>
          </div>
          <div>
            <DiscordIcon/>
          </div>
          <div>
            <BehanceIcon/>
          </div>
          <div>
            <Basketball/>
          </div>
        </div>
      </div>
    </div>
  )
}
