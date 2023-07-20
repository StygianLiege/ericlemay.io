import mothership6 from './audio/mothership6.aiff';
import pdf from './resume/Eric_Lemay_Resume.pdf';

const Navbar = () => {
  const go = 'mailto:';
  const away = 'lemay.eric.r';
  const spam = '@gmail';
  const bots = '.com';
  return (
    <nav className="navbar">
      <h1 onClick={() => new Audio(mothership6).play()}>Eric Lemay</h1>
      <div className="links">
        <a
          href={pdf}
          download="Eric Lemay Resume"
          onClick={(e) => e.target.blur()}
        >
          Resume
        </a>
        <a href={go + away + spam + bots} onClick={(e) => e.target.blur()}>
          Email
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/StygianLiege"
          onClick={(e) => e.target.blur()}
        >
          Github
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lemayericr/"
          onClick={(e) => e.target.blur()}
        >
          Linkedin
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
