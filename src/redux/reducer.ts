import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'

import * as main from './dataRedux'

export const rootReducer = combineReducers({
  main: main.reducer,
})

export function* rootSaga() {
  yield all([main.saga()])
}
