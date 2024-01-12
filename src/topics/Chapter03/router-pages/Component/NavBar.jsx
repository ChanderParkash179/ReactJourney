import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Logo</NavLink>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-purple-700" : "text-black"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
