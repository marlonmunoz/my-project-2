import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav className="nav-tabs">
            <ul className="ul-nav">
                <li className="my-tabs">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home </NavLink>
                </li>
                <li className="my-tabs">
                    <NavLink to="/add_toy" className={({ isActive }) => isActive ? "active" : ""}> Add New Toy </NavLink>
                </li>
                <li className="my-tabs">
                    <NavLink to="/mission" className={({ isActive }) => isActive ? "active" : ""}>Mission </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;


