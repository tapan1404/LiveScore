import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CrickTrack</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/points">Points Table</Link>
      </div>
    </nav>
  );
}

export default Navbar;
