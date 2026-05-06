import { Link } from "react-router-dom";
let Navbar = () => {
    return (
        <>
           <div className="flex gap-30 items-center justify-center bg-gray-800 h-20 w-full ">
                <h1 className="font-bold text-2xl text-gray-50">My Portfolio</h1>
                <Link to="/portfolio" className="text-xl text-gray-50 ">Home</Link>
                <Link to="/about" className="text-xl text-gray-50 ">About</Link>
                <Link to="/service" className="text-xl text-gray-50 ">Service</Link>
                <Link to="/skills" className="text-xl text-gray-50 ">Skills</Link>
                <Link to="/project" className="text-xl text-gray-50 ">Project</Link>
                <Link to="/contact" className="text-xl text-gray-50 ">Contact</Link>
            </div>
        </>
    )
}
export default Navbar;