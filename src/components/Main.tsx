import { connect, ConnectedProps } from 'react-redux'
import React, { useEffect } from 'react'
import { actions as mainActions } from '../redux/dataRedux'

const connector = connect(null, mainActions)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Main = (props: Props) => {
  useEffect(() => {
    props.getData()
  }, [])
  return <div style={{ backgroundColor: props.backgroundColor }}></div>
}

export default connector(Main)
