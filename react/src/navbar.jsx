import icon from "./assets/www.png";
let Navbar = () => {
    return(
        <div id="navbar">
            <img id="logo" src={icon} alt="www" />
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Services</h3>
        </div>
    )
}
export default Navbar;