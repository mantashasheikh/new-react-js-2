import { createContext } from "react"
import Child1 from "./Child1"
let dataobj = createContext()

let person = {
    name : "Mantasha sheikh",
    age : 22
  }


const App = () => {
  
  return (
    <>
    <dataobj.Provider value={person}>
      <Child1/>

    </dataobj.Provider>
    
      
    </>
  )
}

export default App
export {dataobj}
