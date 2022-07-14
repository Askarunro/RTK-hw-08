import { Navigate } from "react-router-dom";

const PublicRoute = ({ token, redirectPath = "/contacts", children , restricted=false }) => {
  if (token && restricted) {
    return <Navigate to={redirectPath}/>;
  }
  return children;
};

export default PublicRoute;