import React from 'react'
import Child1 from "./child1"
import Child2 from './child2'
import Child3 from './Child3'
import Child4 from './Child4'
import Ch1 from './ch1'
const App = () => {
   let obj = {name:'Ahad',
        class : '9th',
        age : '14'
    }
  return (
    <>
     <Child1 name="Mantasha Sheikh" age="22" city="Bhopal"/>
     <Child2 name="Rimsha Sheikh" age="20" city="Bhopal"/>
     <Child3 name="Umra Sheikh" age="21" city="Bhopal"/>
     <Child4 data= {obj}/>
     <Ch1 name="Iqra"/>
      
    </>
  )
}
export default App
