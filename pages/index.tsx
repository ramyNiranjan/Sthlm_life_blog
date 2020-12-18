import Head from 'next/head'
import React from 'react'

interface HomeProps {
  name: string
}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container">
      <Head>
        <title>Sthlm Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sthlm Blog</h1>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
