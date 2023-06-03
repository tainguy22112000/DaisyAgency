import styles from './styles.module.scss'
import {Heading1, Heading2, Heading3, Caption, Paragraph, SubHeading} from '../../components/Typography';
import Spacer from '~/components/Spacer';
import Card from '~/components/Card';
import { NavLink } from 'react-router-dom';
import { features, solutions, userComments, news } from '~/constants/Homepage';
import PrimaryButton from '~/components/PrimaryButton';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      
      {/* Title */}
      <div className={styles.title}>
        <Heading1>Challenged, Creative, Drastic, Action</Heading1>
        <Spacer size='md'/>
        <SubHeading>Comprehensive IT solutions for your business</SubHeading>
      </div>

      {/* Video */}
      <video autoPlay loop muted className={styles.video}>
        <source src="src\assets\videos\AgencyOffice.mp4" type="video/mp4" />
      </video>

      {/* Why choose us? section */}
      <div className={styles.featureContainer}>
        <div className={styles.heading2}>
          <Heading2>Why choose us?</Heading2>
        </div>

        <div className={styles.featureDetails}>
          {features.map((value, key) => (
            <Card key={key} padding="xl">
            <div className={styles.icon}>
              {value.icon}
            </div>
            <Spacer size="xl" />
            <Caption>{value.caption}</Caption>
            <Spacer size="md" />
            <div className={styles.contentbox}>
              <Paragraph>{value.content}</Paragraph>
            </div>
            <Spacer size="xl" />
            <NavLink to={value.link} className={styles.viewmore}>View more</NavLink>
          </Card>
          ))}
        </div>
      </div>

      {/* Our Solution & Services Section */}
      <div className={styles.solutionContainer}>
          <div className={styles.solutionContent}>
            <Heading2>Our solutions & services</Heading2>
            <Spacer size="md" />
            <Paragraph>PORIONAL SOLUTION - SUSTAINABLE SUCCESS</Paragraph>
            <Spacer size="3xl" />
            {solutions.map((value, key) => (
              <div className={styles.solutionDetails} key={key}>
                <span className={styles.solutionIcon}>{value.icon}</span>
                <span>{value.name}</span>
              </div>
            ))}
          </div>
          <div>
            <div className={styles.imgStructure}>
              <div className={styles.imgLeft}>
                <img className={styles.imgFloatRight} src="src\assets\images\Solution1.png"/>
                <Spacer size="2xl"/>
                <img src="src\assets\images\Solution2.png"/>
              </div>
              <div className={styles.imgRight}>
                <img src="src\assets\images\Solution3.png"/>
                <Spacer size="2xl"/>
                <img src="src\assets\images\Solution4.png"/>
              </div>
            </div>
            <Spacer size="2xl"/>
            <div className={styles.imgStructure}>
              <img className={styles.imgMarginLeft} src="src\assets\images\Solution5.png" />
              <img className={styles.imgRight20} src="src\assets\images\Solution6.png" />
            </div>
          </div>
      </div>

      {/* User Comments */}
      <div className={styles.userComments}>
        <div className={styles.heading2}>
            <Heading2>What people are saying</Heading2>
        </div>
        <div className={styles.comment}>
          {userComments.map((value, key) => (
            <Card padding="lg" key={key}>
              <Paragraph>“ {value.comment} ”</Paragraph>
              <Spacer size="xl" />
              {value.user}
            </Card>
          ))}
        </div>
      </div>

      {/* News */}
      <div className={styles.newsContainer}>
        <div className={styles.heading2}>
              <Heading2>Update your technical know-how</Heading2>
        </div>
        <div className={styles.news}>
            {news.map((value, key) => (
              <Card padding="sm">
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

      {/* Logos */}
      <div className={styles.logos}>
          <div>
            <img src="src\assets\images\Cortex.png" />
            <img src="src\assets\images\Paloalto.png" />
            <img src="src\assets\images\Prisma.png" />
          </div>
          <div>
            <img src="src\assets\images\Strata.png" />
            <img src="src\assets\images\Unit42.png" />
            <img src="src\assets\images\Juniper.png" />
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
            <img src="src\assets\images\MoreInfoImg.png" />
          </div>
      </div>       

    </div>
  )
}
