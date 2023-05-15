import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom';

type props = {
    title: string | JSX.Element;
    info: string[];
    link: string;
}
export default function FooterInfo({title, info, link}: props) {
  return (
    <ul>
        <li><NavLink to={link} className={styles.title}>{title}</NavLink></li>
        {info.map((value, key) => (
            <li key={key} className={styles.info}>{value}</li>
        ))}      
    </ul>
  )
}
