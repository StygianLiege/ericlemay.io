import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className="work">
      <h2 className="work-header">Experience Highlight:</h2>
      <div className="work-content">
        <h2>Mist</h2>
        <p>
          Most recently I co-created Mist, an application performance
          monitoring tool for pre-deployment CloudFlare workers. Mist allows
          developers to gather and analyze metrics on unpublished serverless
          functions by locally hosting them in a simulated cloud environment
          integrated with OpenTelemetry tracing to record worker actvity and
          plot it across a series of Chart.js visuals. You can read more about
          Mist{' '}
          <Link to="/mist-medium" className="work-link">
            here
          </Link>
          , or check out the{' '}
          <Link to="/mist-github" className="work-link">
            repo
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Work;
