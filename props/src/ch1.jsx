import React from 'react'
import Ch2 from './ch2'
const Ch1 = (props) => {
  return (
    <>
    <h1>this is chapter1</h1>
    <Ch2 name={props.name}/>
   
    </>
  )
}
export default Ch1
