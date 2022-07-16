import { Navigate } from "react-router-dom";

const PublicRoute = ({ isLoggedIn, redirectPath = "/contacts", children , restricted=false }) => {
  if (isLoggedIn && restricted) {
    return <Navigate to={redirectPath}/>;
  }
  return children;
};

export default PublicRoute;