import styles from './Lesson4.module.scss'

export interface ILesson4 {
  // ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const Lesson4: React.FC<ILesson4> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.block}>
        <h2>Column 1</h2>
        <p>
          A collection of textile samples lay spread out on the table - Samsa
          was a travelling salesman - and above it there hung a picture that he
          had recently cut out of an illustrated magazine and housed in a nice,
          gilded frame.
        </p>
      </div>
      <div className={styles.block}>
        <h2>Column Two</h2>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin.
        </p>
      </div>
      <div className={styles.block}>
        <h2>The Third Column</h2>
        <p>
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked.
        </p>
        <p>
          &quot; What&apos;s happened to me? &quot; he thought. It wasn&apos;t a
          dream. His room, a proper human room although a little too small, lay
          peacefully between its four familiar walls.
        </p>
      </div>
    </section>
  )
}

export default Lesson4
