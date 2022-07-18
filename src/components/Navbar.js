import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Course Work</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to={location.pathname}>Welcome</Link>
      </div>
    </nav>
  );
};

export default Navbar;
