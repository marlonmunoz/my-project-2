import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav className="nav-tabs">
            <NavLink to="/">Home </NavLink>
            <NavLink to="/add_toy"> AddToy </NavLink>
            <NavLink to="/about">About </NavLink>
        </nav>
    )
}
export default NavBar;