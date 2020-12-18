import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootReducer, rootSaga } from './reducer'
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware({
  onError: (error: any) => {
    store.dispatch({ type: error.action || 'ERROR_GENERAL', payload: error })
  },
})

const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  sagaMiddleware,
]

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
