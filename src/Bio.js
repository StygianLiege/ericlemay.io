import mothership6 from './audio/mothership6.aiff';

const Bio = () => {
  // const audio = [
  //   mothership1,
  //   mothership6,
  //   mothership3,
  //   mothership4,
  //   mothership5,
  // ];
  // const handleAudio = () => {
  //   const clip = audio[Math.trunc(Math.random() * 5)];
  //   return new Audio(clip).play();
  // };
  return (
    <div className="bio">
      <h2 className="bio-header">About:</h2>
      <div className="bio-content">
        <div className="bio-content-container">
          <h2 className="bio-content-header">Software Engineer</h2>
          <p>
            &nbsp;► Frontend focused <br />
            <br />
            &nbsp;► Detail oriented <br />
            <br />
            &nbsp;► Passionate about <br />
            &nbsp;&nbsp;&nbsp;polished, dynamic UIs <br />
            <br />
            &nbsp;► Specializes in modern <br />
            &nbsp;&nbsp;&nbsp;JavaScript libraries <br />
            &nbsp;&nbsp;&nbsp;and frameworks
          </p>
        </div>
        <div
          className="bio-headshot"
          onClick={() => new Audio(mothership6).play()}
        ></div>
      </div>
    </div>
  );
};

export default Bio;
