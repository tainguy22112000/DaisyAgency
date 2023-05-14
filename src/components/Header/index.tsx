import React from 'react'
import styles from './styles.module.scss'
import PrimaryButton from '../PrimaryButton'
import { Logo } from '~/assets/icon'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>
          <Logo/>
        </div>
        <div className={styles.seperated}></div>
        <div className={styles.navigation}>
          <ul>
            <li className={styles.active}><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/solution">Solutions & Services</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
          </ul>
        </div>
      </div>
      <div className={styles.navbar}>
        <PrimaryButton title="Get in touch"/>
      </div>
    </div>
  )
}

export default Header
