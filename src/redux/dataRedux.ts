import { put, takeLatest } from 'redux-saga/effects'
import { getData } from './dataCrud'

export const actionTypes = {
  GET_DATA_REQUEST: 'GET_DATA_REQUEST',
  GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
}

const initialState = {
  data: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_REQUEST: {
      return {
        ...state,
      }
    }
    case actionTypes.GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload.response,
      }
    }
    default:
      return state
  }
}

export const actions = {
  getData: (data) => ({
    type: actionTypes.GET_DATA_REQUEST,
    payload: { data },
  }),
  getDataSuccess: (response) => ({
    type: actionTypes.GET_DATA_SUCCESS,
    payload: { response },
  }),
}

export function* saga() {
  yield takeLatest(actionTypes.GET_DATA_REQUEST, function* () {
    const response = yield getData()

    yield put(actions.getDataSuccess(response.data))
  })
}
