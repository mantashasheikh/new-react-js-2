import flower from "./assets/flower.jpg";
let Content = () => {
    return(
        <div id="content">
            <h1>Welcome to Our Website</h1>
            <p>This is the main content area.</p>
            <img src={flower} alt="Flower" />
        </div>
    )
}
export default Content;