import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav className="nav-tabs">
            <ul>
                <li className="my-links">
                    <NavLink to="/">Home </NavLink>
                </li>
                <li className="my-links">
                    <NavLink to="/add_toy"> AddToy </NavLink>
                </li>
                <li className="my-links">
                    <NavLink to="/about">About </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;


// function NavBar () {my-links
//     return (
//         <nav className="nav-tabs">
//             <NavLink to="/">Home </NavLink>
//             <NavLink to="/add_toy"> AddToy </NavLink>
//             <NavLink to="/about">About </NavLink>
//         </nav>
//     )
// }