import styles from './Lesson1.module.scss'

export interface ILesson1 {
  // ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const Lesson1: React.FC<ILesson1> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.child}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab! Ratione sunt vero labore quo sapiente dolor dolore voluptate quod.
        </p>
      </div>
    </section>
  )
}

export default Lesson1
