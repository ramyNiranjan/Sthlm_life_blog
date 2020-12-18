import Head from 'next/head'
import React from 'react'

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
  return (
    <div className="container">
      <Head>
        <title>Sthlm Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sthlm Blog</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}

export default Home
