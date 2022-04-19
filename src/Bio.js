import laser from './audio/heat-vision.mp3';
import pew from './audio/pew.mp3';

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-content">
        <h2 onClick={() => new Audio(pew).play()}>Software Engineer</h2>
        <p>
          with a passion for polished, <br /> dynamic user interfaces <br />
          specializing in modern JavaScript <br /> libraries and frameworks.
        </p>
      </div>
      <div className="profile">
        <img onClick={() => new Audio(laser).play()} />
      </div>
    </div>
  );
};

export default Bio;
