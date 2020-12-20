import { combineReducers } from 'redux'
import userReducer from './UserReducer'

const RootReducer = combineReducers({
  //fetch users example
  users: userReducer,
})

export default RootReducer
