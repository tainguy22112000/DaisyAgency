import React from 'react'
import styles from './styles.module.scss'
import { Heading1, Heading2, Heading3, Paragraph } from '~/components/Typography'
import { SecondaryButton } from '~/components/Button'
import { solutionDetailsList } from '~/constants/Solution'
import Spacer from '~/components/Spacer'
import { news } from '~/constants/Homepage'
import Card from '~/components/Card'

export default function Solution() {
  return (
    <div className={styles.container}>

      {/* Title */}
      <div className={styles.title}>
        <Heading1>What things we are able to do</Heading1>
      </div>

      {/* Solutions */}
      <div className={styles.solutionMainContainer}>
        {solutionDetailsList.map((solution, key) => (
          (key % 2 === 0) ?
            (<div className={styles.solutionContainerLeft}>
              <div className={styles.contentWrapperLeft}>
                  <Heading2>{solution.title}</Heading2>
                  <Spacer size="2xl" />
                  <div className={styles.description}>{solution.description}</div>
                  <Spacer size="2xl" />
                  <SecondaryButton title="Explore more" />
              </div>
              {solution.image}
          </div>) 
          : (<div className={styles.solutionContainerRight}>
            {solution.image}
            <div className={styles.contentWrapperRight}>
                <Heading2>{solution.title}</Heading2>
                <Spacer size="2xl" />
                <div className={styles.description}>{solution.description}</div>
                <Spacer size="2xl" />
                <SecondaryButton title="Explore more" />
            </div>
        </div>)
        ))}
      </div>

      {/* News */}
      <div className={styles.newsContainer}>
        <div className={styles.heading2}>
          <Heading2>Update your technical know-how</Heading2>
        </div>
        <Spacer size="spacer60" />
        <div className={styles.news}>
          {news.map((value, key) => (
            <Card padding="sm" key={key}>
              {value.image}
              <Spacer size="lg" />
              <Paragraph>{value.date}</Paragraph>
              <Spacer size="lg" />
              <Heading3>{value.title}</Heading3>
              <Spacer size="lg" />
              <Paragraph>{value.content}</Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
