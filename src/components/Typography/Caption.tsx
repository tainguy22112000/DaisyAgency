import styles from './styles.module.scss'
import { TypoProps } from './Heading1'

export default function Caption({children}: TypoProps) {
  return (
    <div className={styles.caption}>{children}</div>
  )
}