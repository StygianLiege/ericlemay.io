import mothership6 from './audio/mothership6.aiff';

const Bio = () => {
  return (
    <div className="bio">
      <h2 className="bio-header">About:</h2>
      <div className="bio-content">
        <div className="bio-content-container">
          <h2 className="bio-content-header">Software Engineer</h2>
          <p>
            &nbsp;► Lifts weights <br />
            <br />
            &nbsp;► Loves his dog <br />
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
