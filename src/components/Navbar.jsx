import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="PageWelcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="PageBooks">Books</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
