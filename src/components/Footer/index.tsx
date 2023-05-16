import React from 'react'
import styles from './styles.module.scss'
import FooterInfo from '../FooterInfo'
import { footerInfo, contactIcons } from '~/constants/Footer'

export const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        {footerInfo.map((value, key) => (
          <FooterInfo key={key} title={value.title} info={value.info} link={value.link}/>
        ))}
      </div>
      <div className={styles.moreinfo}>
        <p>© Copyright 2021-2022</p>
        <ul>
          {contactIcons.map((value, key) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
