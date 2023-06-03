import { ReactNode } from 'react'
import classNames from 'classnames';
import styles from './styles.module.scss'

type FeatureProps = {
    children: ReactNode;
    padding: string;
}

export default function Card({ children, padding }: FeatureProps) {
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
