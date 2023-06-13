import React, { useContext } from 'react'
import { userName } from './parent'

const Child = () => {
    const name = useContext(userName)
  return (
    <div>
        <div>My name is {name}</div>

    </div>

  )
}

export default Child;