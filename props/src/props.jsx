import Pchild from "./Pchild"
import Tailwind from "./tailwind"
const Props = ()=>{
    let data =  [     
        {
            name:"Rimsha",
            age:19,
            city:"Gwalior"
        },
        {
            name:"Alisha",
            age:22,
            city:"Ratlam"
        },
        {
            name:"Anjali",
            age:23,
            city:"Kanpur"
        }



    ]
return(
        <>
         <h1>this is props parent</h1>

         {data.map((e) => 
            (<Pchild data={e}/>))}

         <Tailwind/>   


        </>
    )
}
export default Props