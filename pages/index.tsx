import Head from 'next/head'
import Link from 'next/link'
// import Lesson from '../components/css-layout-challanges/Lesson13'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experiments</title>
      </Head>
      {/* <Lesson nr={null} /> */}
      <Link href='/tailwind' className='text-2xl text-sky-400 hover:text-black hover:underline'>Tailwind css</Link>
    </div>
  )
}

