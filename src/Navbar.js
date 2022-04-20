import { Link } from 'react-router-dom';
import laser from './audio/pew.mp3';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 onClick={() => new Audio(laser).play()}>Eric Roger Lemay</h1>
      <div className="links">
        {/* <Link to="/">Home</Link> */}
        <Link to="/github" target="_blank" rel="noopener noreferrer">Github</Link>
        <Link to="/linkedin" target="_blank" rel="noopener noreferrer">Linkedin</Link>
      </div>
    </nav>
  );
};

export default Navbar;

