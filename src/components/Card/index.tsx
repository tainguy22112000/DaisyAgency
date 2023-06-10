import { ReactNode } from 'react'
import classNames from 'classnames';
import styles from './styles.module.scss'

type CardProps = {
    children: ReactNode;
    padding: string;
}

export default function Card({ children, padding = 'md' }: CardProps) {
  return (
    <div className={classNames(styles.container, {
      [styles.sm]: padding === 'sm',
      [styles.md]: padding === 'md',
      [styles.lg]: padding === 'lg',
      [styles.xl]: padding === 'xl'
    })}>
        {children}
    </div>
  )
}
