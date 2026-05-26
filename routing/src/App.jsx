import {Routes , Route, Link} from 'react-router-dom'
import Home from './home'
import About from './About'
import Contact from './contact'
import Services from "./services"

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
