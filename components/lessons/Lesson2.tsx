import Link from 'next/link'
import styles from './Lesson2.module.scss'

export interface ILesson2 {
  // ComponentTemplateProp: string
}
const menu = [
  'Home',
  'News',
  'Products',
  'Blog',
  'Press',
  'releases',
  'About',
  'Contact',
]

// ---------------------------------------------------------------------------

const Lesson2: React.FC<ILesson2> = () => {
  return (
    <section className={styles.wrapper}>
      <nav className={styles.menu}>
        <ul>
          {menu.map((item) => (<li key={item}><Link href='/' legacyBehavior><a>{ item }</a></Link></li>))}
        </ul>
      </nav>
    </section>
  )
}

export default Lesson2
