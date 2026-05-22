import React from 'react'
import Home from './home'
import About from './about'
const App = () => {
  function fun(name) {
    alert(`my name is ${name}`)
  }
  function fun1() {
    alert("onmouse enter event")
  }
  function fun2(){
    alert("on key down event")
  }
  return (
    <>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum officiis maxime, accusamus culpa quo nihil nobis expedita 
        commodi saepe odit eum error ducimus consequuntur dolores,
        ullam id dolorem delectus veniam.</h1>
      
      <button onClick={()=>fun("Mantasha")}>click here..</button>
      <button onMouseEnter={fun1}> on mouse enter</button>
      <button onKeyDown={fun2}>on key douwn</button>
      <Home/>
      <About/>
      
    </>
  )
}
export default App
