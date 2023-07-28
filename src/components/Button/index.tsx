import React from 'react'
import styles from './styles.module.scss'

type props = {
    title: string,
    onClick?: () => void
}

export function PrimaryButton({title, onClick}: props) {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
        {title}
    </button>
  )
}

export function SecondaryButton({title, onClick}: props) {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
        {title}
    </button>
  )
}