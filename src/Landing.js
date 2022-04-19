import Bio from './Bio';
import Tech from './Tech';
import Work from './Work';

const Landing = () => {
  return (
    <div className="landing">
      <Bio />
      <Tech />
      <Work />
      {/* <Experience /> */}
    </div>
  );
};

export default Landing;
