import {
  USERS_FAIL,
  USERS_LOADING,
  USERS_SUCCESS,
  UsersDispatchTypes,
  UsersType,
} from '../actions/UserActionTypes'

interface DefaultStateI {
  loading: boolean
  data?: UsersType
}

const defaultState: DefaultStateI = {
  loading: false,
}

const usersReducer = (
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

export default usersReducer
