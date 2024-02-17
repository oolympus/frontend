import { Navigate } from 'react-router-dom';
import React from 'react';
import { paths } from 'src/paths';

export const withAuth = <P extends object>(ProtectedComponent: React.FC<P>) => {
	const ComponentWithAuth: React.FC<P> = (props) => {
		const token = window.localStorage.getItem('accessToken');
		const user = window.localStorage.getItem('user');

		const isAuthenticated = token !== null && user !== null;

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
