import React from 'react'
import { Provider } from 'react-redux'
import Main from '../components/Main'
import store from '../redux/Store'
export const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default Home
