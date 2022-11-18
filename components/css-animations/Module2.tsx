/* eslint-disable @next/next/no-img-element */
import styles from './Module2.module.scss'

const Module = () => {
    return (
      <div className={styles.wrap}>
        <img src="/robots/robot2.svg" alt="two robot" className={styles.robot2} />
      </div>
    )
}

export default Module
