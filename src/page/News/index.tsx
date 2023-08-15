import React from 'react'
import styles from './styles.module.scss'
import { Heading1, Heading2, Paragraph } from '~/components/Typography'
import { PrimaryButton, SecondaryButton } from '~/components/Button'
import Spacer from '~/components/Spacer'
import classNames from 'classnames'

export default function News() {
  return (
    <div className={styles.container}>

      {/* Title */}
      <div className={styles.title}>
        <Heading1>Update your technical khow-how</Heading1>
      </div>

      {/* News category tabs */}
      <div className={styles.navigation}>
          <ul>
            <li className={styles.active}>All</li>
            <li>Marketing</li>
            <li>Product</li>
            <li>Design</li>
            <li>Website</li>
            <li>Mobile app</li>
          </ul>
        </div>

        {/* Carousel - UI */}
        <div className={styles.carousel}>
          <img src="src\assets\images\NewsBanner.png" alt="First-banner" />
          <div className={styles.designButton}>
            <PrimaryButton title="Design" />
          </div>
          <div className={styles.newsWrapper}>
            <div>
              <Paragraph>Oct 10, 2022</Paragraph>
              <Spacer size="2xl" />
              <Heading2>But this article will not deal with that sense of the word</Heading2>
              <Spacer size="2xl" />
              <Paragraph>Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.</Paragraph>
              <Spacer size="2xl" />
              <div className={styles.readMoreButton}>
                <SecondaryButton title="Read more" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Display Bar */}
          <div className={styles.carouselDisplayBar}>
            <div className={classNames(styles.carouselElement, styles.display)}></div>
            <div className={styles.carouselElement}></div>
            <div className={styles.carouselElement}></div>
            <div className={styles.carouselElement}></div>
            <div className={styles.carouselElement}></div>
          </div>
    </div>
  )
}
