const Work = () => {
  return (
    <div className="work">
      <h2 className="work-header">Experience Highlight:</h2>
      <div className="work-content">
        <h2>Mist</h2>
        <p>
          Most recently I worked on Mist, an application performance monitoring
          tool for pre-deployment CloudFlare workers. Mist allows developers to
          gather and analyze metrics on unpublished serverless functions by
          locally hosting them in a simulated cloud environment integrated with
          OpenTelemetry tracing to record worker actvity and plot it across a
          series of Chart.js visuals. You can read more about Mist{' '}
          <a
            rel="noopener noreferrer"
            href="https://medium.com/@lrinkedewit/what-is-mist-3902e46f037c"
            className="work-link"
            // target="_blank"
            onClick={(e) => e.target.blur()}
          >
            here
          </a>
          , or check out the{' '}
          <a
            rel="noopener noreferrer"
            href="https://github.com/oslabs-beta/mist"
            className="work-link"
            // target="_blank"
            onClick={(e) => e.target.blur()}
          >
            repo
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Work;
