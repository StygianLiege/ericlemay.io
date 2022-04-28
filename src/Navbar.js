import { Link } from 'react-router-dom';
import mothership6 from './audio/mothership6.aiff';

const Navbar = () => {
  const go = 'mailto:';
  const away = 'ericrogerlemay';
  const spam = '@gmail';
  const bots = '.com';
  return (
    <nav className="navbar">
      <h1 onClick={() => new Audio(mothership6).play()}>Eric Roger Lemay</h1>
      <div className="links">
        <a href={go + away + spam + bots} onClick={(e) => e.target.blur()}>
          Email
        </a>
        <Link to="/github">Github</Link>
        <Link to="/linkedin">Linkedin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
