import { Link } from 'react-router-dom';

const notFound = () => {
  return (
    <div>
      <h1>This page os not exist</h1>
      <Link to="/"> to home page </Link>
    </div>
  );
};

export default notFound;
