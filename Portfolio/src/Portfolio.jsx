import React from "react";
import img1 from "./assets/myImage.png";
import img2 from "./assets/LinkedIn.png.webp";
import img3 from "./assets/whatsapp.png";
import img4 from "./assets/Instagram_icon.png";
import img5 from "./assets/facebook.webp";

let Portfolio = () => {
    return (
        <>
        {/* header */}
        <div className="flex gap-30 items-center justify-center bg-gray-800 h-20 w-full ">
            <h1 className="font-bold text-2xl text-gray-50">My Portfolio</h1>
            <a href="Porfolio.jsx"  className="text-xl text-gray-50 ">Home</a>
            <a href="" className="text-xl text-gray-50 ">About</a>
            <a href="" className="text-xl text-gray-50 ">Service</a>
            <a href="" className="text-xl text-gray-50 ">Skills</a>
            <a href="" className="text-xl text-gray-50 ">Project</a>
            <a href="" className="text-xl text-gray-50 ">Contact</a>
        </div>
        {/* section */}
        <div className="flex gap-30 justify-center  mt-20 w-full h-150">
            <div className="h-100 w-100 flex items-center justify-center  rounded-lg shadow-lg">
                <img src={img1} alt="Profile" className="rounded-full"/>

            </div>
            <div className="h-100 w-100">
                <p className="text-2xl text-gray-800">Hello It's me,</p>
                <h1 className="text-4xl font-bold text-gray-800">Mantasha sheikh</h1>
                <p className="text-xl text-gray-800">And I am a Full Stack Web Developer</p><br /><br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam consequuntur sit iste mollitia 
                    praesentium similique corporis hic. Voluptatibus repellat consequuntur doloremque minus voluptatum. 
                    Illum perspiciatis veniam, laborum impedit dolorem iste?</p><br /><br />

                <div className="flex gap-5">
                   <img src={img2} alt="LinkedIn" className="h-10 w-10"/>
                   <img src={img3} alt="WhatsApp" className="h-10 w-10"/>
                   <img src={img4} alt="Instagram" className="h-10 w-10"/>
                   <img src={img5} alt="Facebook" className="h-10 w-10"/>
                </div>    
            </div>
        </div>
        {/* footer */}
        <div>

        </div>

        </>
    )
}
export default Portfolio;