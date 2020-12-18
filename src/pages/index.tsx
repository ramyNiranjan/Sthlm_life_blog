import Head from 'next/head'
import React from 'react'
import Main from '../components/Main'
import { Provider } from 'react-redux'
import store, { persistor } from '../redux/store'

export const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Sthlm Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Provider store={store}>
          <Main store={store} persistor={persistor} />
        </Provider>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
