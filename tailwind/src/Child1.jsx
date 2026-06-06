import img1 from "./assets/myImage.png"
const Child1 = () => {
  return (
    <>
    <div className="flex gap-30 justify-center  mt-20 w-full h-130 p-top-20">
        <h1 className="text-2xl font-bold pt-20">this is image</h1>
        <div className="h-100 w-100 flex items-center justify-center  ">
            <img src={img1} alt="My Image" />
        </div>

        
    </div>
      
    </>
  )
}

export default Child1
