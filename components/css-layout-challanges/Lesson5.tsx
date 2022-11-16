/* eslint-disable @next/next/no-img-element */
import styles from './Lesson5.module.scss'

export interface ILesson5 {
  // ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const Lesson5: React.FC<ILesson5> = () => {
  return (
    <section className={styles.wrapper}>
      <figure className={styles.image}>
        <img src="/image.svg" alt="Blue soft landscape"/>
      </figure>
      <article className={styles.cover}>
        <h1 className={styles.challengeTitle}>01.05 Full-page two-way split</h1>
        <p>Some more text goes here just for show.</p>
      </article>
    </section>
  )
}

export default Lesson5
