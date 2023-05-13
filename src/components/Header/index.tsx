import React from 'react'
import styles from './styles.module.scss'
import PrimaryButton from '../PrimaryButton'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="src\assets\images\Logo.png" alt="Logo" />
        </div>
        <div className={styles.seperated}></div>
        <div className={styles.navigation}>
          <ul>
            <li><a href="#" className={styles.active}>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Solutions & Services</a></li>
            <li><a href="#">News</a></li>
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
