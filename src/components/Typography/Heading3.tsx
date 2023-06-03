import styles from './styles.module.scss'
import { TypoProps } from './Heading1'

export default function Heading3({children}: TypoProps) {
  return (
    <div className={styles.heading3}>{children}</div>
  )
}