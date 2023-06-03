import styles from './styles.module.scss'
import { TypoProps } from './Heading1'

export default function Heading2({children}: TypoProps) {
  return (
    <div className={styles.heading2}>{children}</div>
  )
}