const Work = () => {
  return (
    <div className="work">
      <h2 className="work-header">Experience Highlight:</h2>
      <div className="work-content">
        <h2>WiseLayer</h2>
        <p>
          Most recently I've been developing the UI at WiseLayer, a two-sided marketplace
          offering smart notifications and analytics dashboards built over processed data
          from common-use ERP systems. Harnessing React’s powerful, component-based architecture
          integrated with global state management handled via Redux Toolkit, I’ve worked closely
          with leadership to rapidly deliver an intuitive user experience providing actionable
          insights from complex ERP data. To learn more about WiseLayer, click{' '}
          <a
            rel="noopener noreferrer"
            href="https://wiselayer.com"
            className="work-link"
            onClick={(e) => e.target.blur()}
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Work;
