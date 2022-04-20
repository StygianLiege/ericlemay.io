import { Link } from 'react-router-dom';
import mothership6 from './audio/mothership6.aiff';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 onClick={() => new Audio(mothership6).play()}>Eric Roger Lemay</h1>
      <div className="links">
        <Link to="/github">Github</Link>
        <Link to="/linkedin">Linkedin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
