import React from 'react'
import { Provider } from 'react-redux'
import Main from '../components/Main'
import Store, { persistor } from '../redux/Store'
export const Home: React.FC = () => {
  return (
    <Provider store={Store} persistor={persistor}>
      <Main />
    </Provider>
  )
}

export default Home
