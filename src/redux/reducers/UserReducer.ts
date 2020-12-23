import {
  USERS_FAIL,
  USERS_LOADING,
  USERS_SUCCESS,
  UsersDispatchTypes,
  UsersType,
} from '../actions/UserActionTypes'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

interface DefaultStateI {
  loading: boolean
  data?: UsersType
}

const defaultState: DefaultStateI = {
  loading: false,
}

const usersReducer = persistReducer(
  {
    storage,
    key: 'data',
    whitelist: ['data'],
  },
  (
    state: DefaultStateI = defaultState,
    action: UsersDispatchTypes
  ): DefaultStateI => {
    switch (action.type) {
      case USERS_FAIL:
        return {
          loading: false,
        }
      case USERS_LOADING:
        return {
          loading: true,
        }
      case USERS_SUCCESS:
        return {
          loading: false,
          data: action.payload,
        }
      default:
        return state
    }
  }
)

export default usersReducer
