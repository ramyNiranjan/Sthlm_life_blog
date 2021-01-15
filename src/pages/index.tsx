import React from 'react'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout/Layout'

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Layout title="Get started">
      <main>
        <Hero />
      </main>
    </Layout>
  )
}

export default Home
