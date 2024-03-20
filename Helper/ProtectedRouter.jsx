import React from "react";
import { UserContext } from "../Hooks/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    //se nao estiver logado, nao mostrara a pagina conta
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }

};

export default ProtectedRouter;
