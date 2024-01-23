import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { paths } from 'src/paths';

export const withAuth = <P extends object>(ProtectedComponent: React.FC<P>) => {
	const ComponentWithAuth: React.FC<P> = (props) => {
		const isAuthenticated = true;
		const location = useLocation();

		console.log(isAuthenticated);

		if (isAuthenticated) {
			return <ProtectedComponent {...props} />;
		} else {
			return (
				<Navigate
					to={paths.auth.login}
					state={{ from: location }}
					replace
				/>
			);
		}
	};
	return ComponentWithAuth;
};
