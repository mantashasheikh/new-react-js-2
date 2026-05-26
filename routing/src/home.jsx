import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h1>Home Page</h1>
       
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/services">Services</Link>
       
    </>
  )
}

export default Home
