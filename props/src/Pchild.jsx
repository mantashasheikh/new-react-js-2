const Pchild = ({data})=>{
    let {name , age , city} = data//destructuring
    return(
        <>
        <h1>this is child</h1>
        <p>my name is {name}</p>
        <p>my age is {age}</p>
        <p>my city is {city}</p>
        </>
    )
}
export default Pchild
