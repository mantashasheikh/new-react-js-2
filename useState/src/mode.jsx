import { useState } from 'react'

const Mode = () => {
    const [light, setLight] = useState(true)
  return (
    <>
    {light?<div style={{ width: '300px', height: '300px', backgroundColor: 'black', color: 'white' }}>Hello world</div>:<div style={{ width: '300px', height: '300px', backgroundColor: 'lightyellow', color: 'black' }}>Hello world</div>}
    <br/>

    <button onClick={()=>setLight(!light)} style={{  width: '100px' }}>{light?"light":"dark"}</button><br/>

      
    </>
  )
}

export default Mode
