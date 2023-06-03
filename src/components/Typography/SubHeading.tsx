import styles from './styles.module.scss'
import { TypoProps } from './Heading1'

export default function SubHeading({children}: TypoProps) {
  return (
    <div className={styles.subheading}>{children}</div>
  )
}