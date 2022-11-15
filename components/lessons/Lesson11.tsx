/* eslint-disable @next/next/no-img-element */
import styles from './Lesson11.module.scss'

export interface ILesson {
  // ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const Card: React.FC<ILesson> = () => {
  return (
    <figure className={styles.card}>
      <div className={styles.inner}>
        <img src="/image.svg" alt="Blue soft landscape" />
        <figcaption>
          <h2>
            <a href="#">Title as link perhaps?</a>
          </h2>
          <p>Responsive cards are a common feature in moder web applications</p>
          <button className={styles.cta}>Apply</button>
        </figcaption>
      </div>
    </figure>
  )
}

const Lesson: React.FC<ILesson> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>01.09 Responsive Card</h1>
      </header>
      <main className={styles.main}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </section>
  )
}

export default Lesson
