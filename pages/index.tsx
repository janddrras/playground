import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experiments</title>
      </Head>
      <Link href="/tailwind">
        <button>Tailwind css</button>
      </Link>
      <Link href="/css-layouts">
        <button>Css layouts</button>
      </Link>
      <Link href="/css-anim">
        <button>Css animations</button>
      </Link>
    </div>
  )
}

