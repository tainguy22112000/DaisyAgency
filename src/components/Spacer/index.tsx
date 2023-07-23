import classNames from 'classnames';
import styles from './styles.module.scss'

type SpacerProps = {
    size: string;
}

export default function Spacer({size = 'md'}: SpacerProps) {
  return (
    <div className={classNames(styles.spacing, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
        [styles.xl]: size === 'xl',
        [styles.xxl]: size === '2xl',
        [styles.xxxl]: size === '3xl',
        [styles.spacer48]: size === 'spacer48',
        [styles.spacer60]: size === 'spacer60'
      })}></div>
  )
}
