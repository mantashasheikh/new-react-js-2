import React, {useContext} from 'react'
import {dataobj} from './App'
const Child2 = () => {
    let {name, age} = useContext(dataobj)

  return (
    <>
    <h1>Child2 and my name is {name } </h1>
    <h2>My age is {age }</h2>
      
    </>
  )
}

export default Child2
