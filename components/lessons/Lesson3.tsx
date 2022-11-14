import styles from './Lesson3.module.scss'

export interface ILesson3 {
  // ComponentTemplateProp: string
}


// ---------------------------------------------------------------------------

const Lesson3: React.FC<ILesson3> = () => {
  return (
    <section className={styles.wrapper}>
      <nav className={styles.grid}>
        <ul>
          <li><p>1</p></li>
          <li><p>2</p></li>
          <li><p>3</p></li>
          <li><p>4</p></li>
          <li><p>5</p></li>
          <li className={styles.featured}><p>6</p></li>
          <li className={styles.featured2}><p>7</p></li>
          <li><p>8</p></li>
          <li><p>9</p></li>
          <li><p>10</p></li>
          <li><p>11</p></li>
          <li><p>12</p></li>
        </ul>
      </nav>
    </section>
  )
}

export default Lesson3
