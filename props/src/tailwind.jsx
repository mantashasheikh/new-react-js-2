import "./tailwind.css";
import img1 from "./assets/butterfly.jpg"
const Tailwind = () => {
    return (
        <>
        <div className="h-20 w-full border flex gap-50 height-100 bg-amber-800 text-center justify-center items-center">
            <h1 className="font-bold text-2xl">MyWebsite</h1>
            <a href="" className="text-xl">Home</a>
            <a href="" className="text-xl">About</a>
            <a href="" className="text-xl">Contact</a>
            <a href="" className="text-xl">service</a>
        </div>
        <div className="h-100 w-full border flex gap-50 height-100 bg-yellow-500 text-center justify-center items-center">
            <h2 className="text-xl">Welcome to MyWebsite</h2>
            <br /><br />
            
            <img src={img1} alt="Butterfly" className="h-80 w-80" />
        </div>
        <div className="h-30 w-full  border flex gap-50 bg-amber-800 text-center justify-center items-center">
            <h1 className="text-2xl font-bold text-center bg-gray-600">Footer</h1>
        </div>
        
        </>
    )
}
export default Tailwind;