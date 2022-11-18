/* eslint-disable @next/next/no-img-element */
import styles from './Module8.module.scss'

const Module = () => {
  const text = 'UP&OVER'
  const arr = text.split('')
  return (
    <div className={styles.wrap}>
      <h2>
        {arr.map((lttr, idx) => (
          <span
            key={idx}
            style={{ animationDelay: `${idx * 0.2}s, ${idx * 0.2 + 2.75}s` }}
          >
            {lttr}
          </span>
        ))}
      </h2>
    </div>
  )
}

export default Module
