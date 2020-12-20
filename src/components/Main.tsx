import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GetUsers } from '../redux/actions/UserActions'

function Main() {
  const dispatch = useDispatch()
  //   const { data } = useSelector((state: RootStore) => state.users)

  useEffect(() => {
    dispatch(GetUsers())
  }, [])

  return (
    <div className="App">
      <p>Fetch users</p>
    </div>
  )
}

export default Main
