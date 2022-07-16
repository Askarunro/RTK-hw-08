import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, redirectPath = "/", children }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;

