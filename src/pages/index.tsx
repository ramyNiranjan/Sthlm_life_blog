import React from 'react'
import { Provider } from 'react-redux'
import Main from '../components/Main'
import Store from '../redux/Store'
export const Home: React.FC = () => {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  )
}

export default Home
