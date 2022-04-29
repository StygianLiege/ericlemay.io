import { Link } from 'react-router-dom';
import mothership6 from './audio/mothership6.aiff';
import pdf from './images/Eric_Lemay_Resume.pdf';

const Navbar = () => {
  const go = 'mailto:';
  const away = 'lemay.eric.r';
  const spam = '@gmail';
  const bots = '.com';
  return (
    <nav className="navbar">
      <h1 onClick={() => new Audio(mothership6).play()}>Eric Lemay</h1>
      <div className="links">
        <a href={pdf} download="Eric Lemay Resume">
          Resume
        </a>
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
