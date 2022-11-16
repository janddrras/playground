import type { NextPage } from 'next'
import Head from 'next/head'
import Tail from '../components/tailwind/Tail'

const Tailwind: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind</title>
      </Head>
      <Tail />
    </>
  )
}

export default Tailwind
