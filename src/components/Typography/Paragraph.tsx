import styles from './styles.module.scss'
import { TypoProps } from './Heading1'

export default function Paragraph({children}: TypoProps) {
  return (
    <div className={styles.paragraph}>{children}</div>
  )
}