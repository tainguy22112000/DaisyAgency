import { ReactNode } from 'react'
import styles from './styles.module.scss'

export type TypoProps = {
  children: ReactNode;
}

export default function Heading1({children}: TypoProps) {
  return (
    <div className={styles.heading1}>{children}</div>
  )
}