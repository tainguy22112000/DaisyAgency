import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Heading1, Heading2, Heading3, Paragraph } from '~/components/Typography'
import { PrimaryButton, SecondaryButton } from '~/components/Button'
import Spacer from '~/components/Spacer'
import classNames from 'classnames'
import { newsList, newsSlider } from '~/constants/News'
import Card from '~/components/Card'

export default function News() {
  const [slide, setSlide] = useState(0);
    
  const handleSetSlide = (key: number) => {
    setSlide(key);
  }

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

        {/* Slider - UI */}
        <div className={styles.sliders}>
          <img src="src\assets\images\NewsBanner.png" alt="First-banner" />
          <div className={styles.designButton}>
            <PrimaryButton title="Design" />
          </div>
        {newsSlider.map((news, key) => (
          <div className={slide === key ? styles.activeSlide : styles.hiddenSlide}>
            <div key={key}>
              <Paragraph>{news.date}</Paragraph>
              <Spacer size="2xl" />
              <Heading2>{news.title}</Heading2>
              <Spacer size="2xl" />
              <Paragraph>{news.description}</Paragraph>
              <Spacer size="2xl" />
              <div className={styles.readMoreButton}>
                <SecondaryButton title="Read more" />
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* Slider Indicator */}
        <div className={styles.indicators}>
          {newsSlider.map((_, key) => (
            <div 
              key={key} 
              className={slide === key ? styles.activeIndicator : classNames(styles.inactiveIndicator, styles.activeIndicator)} 
              onClick={() => handleSetSlide(key)}></div>
          ))}
        </div>
        <hr className={styles.seperatedLine} />

        {/* News */}
        <div className={styles.newsList}>
          {newsList.map((news, key) => (
            <Card padding="sm" key={key}>
              <img src={news.imgPath} alt={news.altText} />
              <Spacer size="lg" />
              <Paragraph>{news.date}</Paragraph>
              <Spacer size="lg" />
              <Heading3>{news.title}</Heading3>
              <Spacer size="lg" />
              <Paragraph>{news.shortDescription}</Paragraph>
            </Card>
          ))}
          <div className={styles.viewMoreBtn}>
            <SecondaryButton title="View more" />
          </div>
        </div>

        {/* Contact */}
      <div className={styles.contact}>
          <div className={styles.contactForm}>
              <Heading2>Need more information or want to get in touch?</Heading2>
              <Spacer size="md"/>
              <Paragraph>Enter your email to get the latest product information, promotions and more</Paragraph>
              <form action="#">
                <input type="text" placeholder='Enter your name' className={styles.formInput} />
                <Spacer size="xl"/>
                <input type="text" placeholder='Enter your name' className={styles.formInput} />
                <Spacer size="xl"/>
                <textarea name="form-message" id="form-id" rows={6} placeholder='Your message' className={styles.formInput}></textarea>
              </form>
              <PrimaryButton title="Confirm"/>
          </div>
          <div>
            <img src="src\assets\images\MoreInfoImg.png" alt="more-infor-image" />
          </div>
      </div>
    </div>
  )
}
