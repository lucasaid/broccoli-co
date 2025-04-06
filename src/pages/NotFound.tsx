import { Link } from "react-router";

/**
 * A 404 error page component that displays a 404
 * indicating that the page was not found, and a link to the home page.
 */
const NotFound = () => {
  return (
    <>
      <h2>404 Error</h2>
      <p>Page not found</p>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default NotFound;
