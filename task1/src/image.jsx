import React from 'react'
import myimg from './assets/hero.png' //assets image

const Image = () => {
    let mycss = {
        backgroundColor : "blue",
        color : "white"
    }
    return (
    <div>
        <h1 style={mycss}>image</h1> //inline css
        <img src="favicon.svg" alt="favicon" /><br /> // public image
        <img src="deer_photo.jpeg.jpg" alt="deer" style={{height:"200px", width:"200px"}} /> <br/> //inline css
        <img src={myimg} alt="hero" /> //assets image
      
    </div>
  )
}
export default Image
