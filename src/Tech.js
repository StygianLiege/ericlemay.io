import react from './images/reactIcon.png';
import redux from './images/reduxIcon.png';
import node from './images/nodeJsIcon.png';

const Tech = () => {
  return (
    <div className="tech">
      <h2 className="tech-header">Core Technologies:</h2>
      <div className="tech-content">
        <div className="tech-container">
          <h2 className="tech-container-header">React</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► Dynamic <br />
                ► Modular <br />
                ► Unopinionated <br />
                ► Fast <br />
                ► Rich Ecosystem <br />
              </p>
            </div>
            <img src={react} alt="react-icon" className="react-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Redux</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► Predictable <br />
                ► Maintainable <br />
                ► Debuggable <br />
                ► Scalable <br />
                ► Performant <br />
              </p>
            </div>
            <img src={redux} alt="redux-icon" className="redux-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Node.js</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► Efficient <br />
                ► Asynchronous <br />
                ► Concurrent <br />
                ► Lightweight <br />
                ► NPM ❤︎ <br />
              </p>
            </div>
            <img src={node} alt="node-icon" className="node-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Notable Mentions</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► HTML/CSS/SASS <br />
                ► SQL/NoSQL <br />
                ► Webpack/Rollup <br />
                ► Docker/AWS <br />
                ► Git Workflow <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
