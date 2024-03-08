import { Link } from "react-router-dom";

function NavBar(){
    return (
        <div className="navBar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About Us</Link>
            <Link className="link" to="/blog">Blog</Link>
        </div>
    )
}

export default NavBar;