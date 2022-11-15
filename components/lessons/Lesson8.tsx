/* eslint-disable @next/next/no-img-element */
import styles from './Lesson8.module.scss'

export interface ILesson {
  // ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const Lesson: React.FC<ILesson> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.challenge}>01.08 Full-bleed sections</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.fullWidth}>
          <h2>The Article Goes Here</h2>
          <p>
            Drops of rain could be heard hitting the pane, which made him feel
            quite sad. &quot;How about if I sleep a little bit longer and forget all
            this nonsense&quot;, he thought, but that was something he was unable to
            do because he was used to sleeping on his right, and in his present
            state couldn&apos;t get into that position. However hard he threw himself
            onto his right, he always rolled back to where he was.
          </p>
        </div>
        <p>
          He must have tried it a hundred times, shut his eyes so that he
          wouldn&apos;t have to look at the floundering legs, and only stopped when
          he began to feel a mild, dull pain there that he had never felt
          before. &quot;Oh, God&quot;, he thought, &quot;what a strenuous career it is that
          I&apos;ve chosen! Travelling day in and day out.
        </p>
        <figure className={styles.fullWidth}>
          <img src="/image.svg" alt="Blue soft landscape"/>
        </figure>
        <p>
          Doing business like this takes much more effort than doing your own
          business at home, and on top of that there&apos;s the curse of travelling,
          worries about making train connections, bad and irregular food,
          contact with different people all the time so that you can never get
          to know anyone or become friendly with them. It can all go to Hell!
        </p>
      </main>
    </section>
  )
}

export default Lesson
