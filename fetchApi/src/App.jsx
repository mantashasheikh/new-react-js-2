import axios from "axios";
import { useEffect, useState } from "react";
function App(){
    let [apidata, setApidata]=useState([])
    useEffect(()=>{ 
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res)=>setApidata(res.data))
    },[])
    return(
      <>
      <table border="1">
        <tr>
          <th>Post Id</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {
          apidata.map((e)=>(
            <tr>
              <td>{e.postId}</td>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
            </tr>
          ))
        
        }
        
      </table>

      </>
    )
}
export default App