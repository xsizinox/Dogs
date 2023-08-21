import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <></>;
  }
};

export default ProtectedRoute;
