// import Form from "./form"
// import Form1 from "./form1"
// import Form2 from "./Signup"
import Signup from "./Signup"
import Login from "./Login"

import { Route,Routes } from 'react-router-dom'
function App(){
  return(
    <>
    {/* <Form/> */}
    {/* <Form1/> */}
    
      <Routes>
        <Route index element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
   
    
    </>

  )
}
export default App