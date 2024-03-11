import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navBar">
            <NavLink className="navBar-item" to="/">Home</NavLink>
            <NavLink className="navBar-item" to="/about">About Us</NavLink>
            <NavLink className="navBar-item" to="/blog">Blog</NavLink>
            <NavLink className="navBar-item" to="/pages">Pages</NavLink>
        </div>
    )
}

export default NavBar;