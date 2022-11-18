/* eslint-disable @next/next/no-img-element */
import styles from './Module1.module.scss'

const Module = () => {
    return (
      <div className={styles.wrap}>
        <img src="/robots/robot1.svg" alt="one robot" className={styles.robot1} />
      </div>
    )
}

export default Module
