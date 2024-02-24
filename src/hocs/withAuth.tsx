import { Navigate } from 'react-router-dom';
import React from 'react';
import { paths } from 'src/paths';
import { useAuthToken } from 'src/hooks/use-auth-token';

export const withAuth = <P extends object>(ProtectedComponent: React.FC<P>) => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const { token, user } = useAuthToken();
    const isAuthenticated = token !== null && user !== null;

    if (isAuthenticated) {
      return <ProtectedComponent {...props} />;
    } else {
      return (
        <Navigate
          to={paths.auth.login}
          replace={true}
        />
      );
    }
  };
  return ComponentWithAuth;
};
