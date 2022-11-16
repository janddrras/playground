/* eslint-disable @next/next/no-img-element */
import styles from './Lesson13.module.scss'

export interface ILesson {
  nr: number | null
}

// ---------------------------------------------------------------------------

const Card: React.FC<ILesson> = ({ nr }) => {
  return (
    <figure className={styles.card}>
      <div className={styles.inner}>
        <img src="/image.svg" alt="Blue soft landscape" />
        <div className={styles.number}>{nr}</div>
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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const Lesson: React.FC<ILesson> = () => {
  return (
    <section className={styles.wrapper}>
      <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>01.09 Responsive Card</h1>
      </header>
        {numbers.map((item) => (
          <Card key={item} nr={item} />
        ))}
      </main>
    </section>
  )
}

export default Lesson
