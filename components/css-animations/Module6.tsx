/* eslint-disable @next/next/no-img-element */
import styles from './Module6.module.scss'

const Module = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.city}>
        <img src="/robots/binaryville.svg" alt="city" />
      </div>
      <img
        src="/robots/cloud01.svg"
        className={`${styles.cloud}  ${styles.cloud01}`}
        alt="cloud1"
      />
      <img
        src="/robots/cloud02.svg"
        className={`${styles.cloud}  ${styles.cloud02}`}
        alt="cloud2"
      />
    </div>
  )
}

export default Module
