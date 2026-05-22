import React from 'react';
import Home from './Home.jsx'; // default import
import {Contact1 , Contact2} from './Contact.jsx';// named import
import Image from './image.jsx' //assets image import
const App = () => {
  return (
      <>
       <Home/>
       <Contact2/>
       <Contact1/>
       <Image/>
      </>
  )
}
export default App;
