import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Skills from "./Skills.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";



function App() {
  return (
    <>
     
      
      <Routes>
        <Route path="/" element={<Layout />} >
           <Route index element={<Portfolio />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/about" element={<About />} />
           <Route path="/skills" element={<Skills />} />
           <Route path="*" element={<h1>Page Not Found</h1>} />
           <Route path="/project" element={<Project />} />
           <Route path="/contact" element={<Contact />} />
        </Route>
        
      </Routes>
      
      
    </>
  )
}
export default App;