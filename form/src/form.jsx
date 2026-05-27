import { useState } from "react"

function Form(){
     let [frmdata , setFrmdata] = useState() 
     let [frm1 , setFrm1] = useState() 
     let [frm2 , setFrm2] = useState() 
     let [frm3 , setFrm3] = useState() 
     let [frm4 , setFrm4] = useState() 
     
     function data(e){
        console.log(e.target.value)
        setFrmdata(e.target.value)
    }
    function branch(e){
        setFrm1(e.target.value)
    }
    function password(e){
        setFrm2(e.target.value)
    }
    function email(e){
        setFrm3(e.target.value)
    }
    function number(e){
        setFrm4(e.target.value)
    }
    function frmsubmit(e){
        e.preventDefault()
        console.log(frmdata)

    }

    return(
       <>
          <h1>{frmdata}</h1>
          <h1>{frm1}</h1>
          <h1>{frm2}</h1>
          <h1>{frm3}</h1>
          <h1>{frm4}</h1>
          
          <form onSubmit={frmsubmit}>
            <label htmlFor="">name:</label>
            <input type="text" onChange={data}></input><br /><br />
            <label htmlFor="">branch:</label>
            <input type="text" onChange={branch} /><br /><br />
            <label htmlFor="">password:</label>
            <input type="password" name="" id="" onChange={password} /><br /><br />
            <label htmlFor="">email:</label>
            <input type="email" name="" id="" onChange={email}/><br /><br />
            <label htmlFor="">mobile number:</label>
            <input type="number" name="" id="" onChange={number}/><br />
            <input type="submit" />


          </form>

          
        </>
    )
}
export default Form