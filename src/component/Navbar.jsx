import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navBar">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/about">About Us</NavLink>
            <NavLink className="link" to="/blog">Blog</NavLink>
        </div>
    )
}

export default NavBar;