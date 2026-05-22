import React from 'react'

const Child3 = (data) => {
    let {name, age , city}=data
  return (
    <>
    <p>this is child 3</p>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{city}</h1>

      
    </>
  )
}

export default Child3
