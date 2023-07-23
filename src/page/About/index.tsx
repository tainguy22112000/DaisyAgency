import React from 'react'
import styles from './styles.module.scss'
import { Caption, Heading1, Heading2, Paragraph, SubHeading } from '~/components/Typography'
import Spacer from '~/components/Spacer'
import { ourProcess, ourTeam, strengthList } from '~/constants/AboutUs'
import Card from '~/components/Card'
import { DashLine } from '~/assets/icon'

export default function About() {
  return (
    <div className={styles.container}>
      
      {/* Title */}
      <div className={styles.title}>
        <Heading1>Porional solution - Sustainable success</Heading1>
        <Spacer size="md" />
        <div className={styles.subHeading}>
          <SubHeading>PSYS is a company specializing in providing information technology solutions and services according to the criterion of "Original Solution - Solid Formula”</SubHeading>
        </div>
      </div>

      {/* Introduction */}
      <div className={styles.introduction}>
        <div className={styles.introCulture}>
          <Heading2>Our culture</Heading2>
          <Spacer size="lg"/>
          <Paragraph>Corporate culture and working environment are the basis for the development of our people, forming a collective strength to help us improve and develop. Understanding that, from the early days of its establishment, we maintains a working style imbued with the human identity of us. Our culture is reflected in the values ​​that we pursue, with core values.</Paragraph>
        </div>
        
        <div className={styles.introQuality}>
          <div className={styles.content}>
            <p className={styles.introHeading}>Quality</p>
            <Spacer size="md"/>
            <Paragraph>Follow the motto "Customer's success is also our company’s success".</Paragraph>
          </div>
        </div>

        <div className={styles.introSpirit}>
          <div className={styles.content}>
            <p className={styles.introHeading}>Spirit</p>
            <Spacer size="md"/>
            <Paragraph>Integrity, professionalism, dedication to customers.</Paragraph>
          </div>
        </div>

        <div className={styles.introPeople}>
          <div className={styles.content}>
            <p className={styles.introHeading}>People</p>
            <Spacer size="md"/>
            <Paragraph>Taking people as the center and foundation for development.</Paragraph>
          </div>
        </div>
      </div>

      {/* Our process */}
      <div>
        <div className={styles.headingWrapper}>
          <Heading2>Our process</Heading2>
        </div>
        <Spacer size='spacer60' />
        <div className={styles.processCards}>
          {ourProcess.map((value, key) => (
            <Card padding="xl" key={key}>
              <div>{value.icon}</div>
              <Spacer size="xl" />
              <Caption>{value.processName}</Caption>
              <Spacer size="md" />
              <Paragraph>{value.description}</Paragraph>
            </Card>
          ))}
        </div>
        <Spacer size='spacer60' />
        <div className={styles.processProgressBar}>
          <div className={styles.processNumber}>1</div>
          <DashLine/>
          <div className={styles.processNumber}>2</div>
          <DashLine/>
          <div className={styles.processNumber}>3</div>
          <DashLine/>
          <div className={styles.processNumber}>4</div>
        </div>
      </div>

      {/* Why choose us */}
      <div className={styles.whyContainer}>
            <img src="src\assets\images\WhyChooseUs.png" alt="why-choose-us" />
            <div className={styles.strengthContainer}>
              <div className={styles.whyTitle}>
                <Heading2>Why choose us?</Heading2>
              </div>
              <Spacer size="spacer48" />
              <div className={styles.strengthList}>
                {strengthList.map((strength, key) => (
                  <div className={styles.strengthWrapper} key={key}>
                    <div>{strength.icon}</div>
                    <Spacer size="lg" />
                    <div className={styles.strengthDescription}>{strength.description}</div>
                  </div>
                ))}
              </div>
            </div>
      </div>

      {/* Our team */}
      <div className={styles.ourTeamContainer}>
        <div className={styles.headingWrapper}>
          <Heading2>Our team</Heading2>
        </div>
        <Spacer size="spacer60" />
        <div className={styles.ourTeamWrapper}>
          {ourTeam.map((member, key) => (
            <Card padding="padding28" key={key}>
              <div>{member.avatar}</div>
              <Spacer size="lg" />
              <div className={styles.memName}>{member.memberName}</div>
              <div className={styles.memRole}>{member.role}</div>
              <Spacer size="lg" />
              <div className={styles.memQuote}>{member.quote}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Logos */}
      <div className={styles.logos}>
        <div>
          <img src="src\assets\images\Cortex.png" alt="logo-cortex" />
            <img src="src\assets\images\Paloalto.png" alt="logo-paloalto" />
            <img src="src\assets\images\Prisma.png" alt="logo-prisma" />
          </div>
          <div>
            <img src="src\assets\images\Strata.png" alt="logo-strata" />
            <img src="src\assets\images\Unit42.png" alt="logo-unit42" />
            <img src="src\assets\images\Juniper.png" alt="logo-juniper" />
          </div>
      </div>
    </div>
  )
}
