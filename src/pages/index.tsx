import React from 'react'
import { Provider } from 'react-redux'
import Main from '../components/Main'
import Store, { persistor } from '../redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
export const Home: React.FC = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

export default Home
