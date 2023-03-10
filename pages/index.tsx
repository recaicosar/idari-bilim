import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer, Navigation, News, SearchBox, Slide } from '@/ui/IdariBirim'
import { Article } from '@/ui/IdariBirim/Home/Article'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>İdari Birim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <SearchBox />
      <Slide />
      <News />
      <Article />
      <Footer />
      
    </div>
  )
}

export default Home
