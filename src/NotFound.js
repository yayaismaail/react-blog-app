import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="not-found">
        <h2>404</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">Go back to the homepage</Link>

      </div>
    );
  };
  
  export default NotFound;
  