import { Navigate } from "react-router-dom";

const PrivateRoute = ({ token, redirectPath = "/", children }) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;

