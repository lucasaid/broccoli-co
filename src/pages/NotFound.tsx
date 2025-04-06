import { Link } from "react-router";

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
