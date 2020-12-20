import { Dispatch } from 'redux'
import {
  USERS_FAIL,
  USERS_LOADING,
  USERS_SUCCESS,
  UsersDispatchTypes,
} from './UserActionTypes'
import axios from 'axios'

export const GetUsers = () => async (
  dispatch: Dispatch<UsersDispatchTypes>
) => {
  try {
    dispatch({
      type: USERS_LOADING,
    })

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`)

    dispatch({
      type: USERS_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: USERS_FAIL,
    })
  }
}
