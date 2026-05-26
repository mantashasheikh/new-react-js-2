import { Link , Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav style={{display:"flex" , gap:"20px" , backgroundColor:"lightgray" , padding:"10px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav><br /><br />
      <Outlet /><br /><br />
      <footer style={{backgroundColor:"lightgray" , padding:"10px"}}>
        <h1>Footer</h1>
      </footer>
      

      
    </>
  )
}

export default Layout
