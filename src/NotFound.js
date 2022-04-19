import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page does not exist...</p>
      <Link to="/">{'>>> Click Me >>>'}</Link>
    </div>
  );
};

export default NotFound;
