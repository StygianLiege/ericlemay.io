import { useEffect } from 'react';

const Redirect = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  });
  return <h2>Redirecting...</h2>;
};

export default Redirect;
