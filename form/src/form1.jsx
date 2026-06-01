import { useState } from "react"
function Form1(){
    let [frmdata,setFrmdata] = useState({})
    function fun(e){
        let {name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        console.log(frmdata)
    }
    

    return(
        <>
        <form onSubmit={submit}>
            <label htmlFor="">name</label>
            <input type="text" name="username" onChange={fun} />
            <label htmlFor="">contact</label>
            <input type="text" name="contact" onChange={fun} />
            <input type="submit" />
        </form>
        </>
    )
}
export default Form1