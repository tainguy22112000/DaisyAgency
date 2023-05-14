import React from 'react'
import styles from './styles.module.scss'

type props = {
    title: string,
}

export default function PrimaryButton({title}: props) {
  return (
    <button className={styles.button}>
        {title}
    </button>
  )
}
