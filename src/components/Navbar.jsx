import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="books">Books</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
