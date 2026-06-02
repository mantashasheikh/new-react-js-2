import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(){
    let [frmdata,setFrmdata] = useState({})

    let navigator = useNavigate()

    function signinput(e){
        let {name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        localStorage.setItem("signdata", JSON.stringify(frmdata))
        navigator("/login")
        
    }
    

    return(
        <>
        <h1>sign in </h1>
        <form onSubmit={submit}>
            <label htmlFor="">name</label>
            <input type="text" name="username" onChange={signinput} />
            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={signinput} />
            <label htmlFor="">Password</label>
            <input type="text" name="Password" onChange={signinput}/>
            <input type="submit" />
            
        </form>
        </>
    )
}
export default Signup