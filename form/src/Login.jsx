import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(){
   let [loginfrm,setLogin] = useState({})

   let navigate = useNavigate()

   function store(e){
      let {name,value} = e.target
      setLogin({...loginfrm,[name]:value})

   }
   function submit(e){
      e.preventDefault()
      let localdata = JSON.parse(localStorage.getItem("signdata"))
      if (loginfrm.email != localdata.email || loginfrm.password !=localdata.password){
         alert("user data not found")
      }
      else{
         navigate("/home")
      }

   }
  return(
       <>
       <h1>Login</h1>
       <form action="" onSubmit={submit}>
         <label htmlFor="">Email</label>
         <input type="text" name="email" onChange={store}/><br /><br />
         <label htmlFor="">Password</label>
         <input type="text" name="password" onChange={store}/><br /><br />
         <input type="submit" />
       </form>
          
       </>
    )
}
export default Login