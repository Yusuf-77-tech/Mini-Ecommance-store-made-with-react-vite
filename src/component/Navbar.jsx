import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">JobBoard</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;