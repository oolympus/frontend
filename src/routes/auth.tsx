import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet } from 'react-router-dom';

import { Layout as AuthClassicLayout } from 'src/layouts/auth/classic-layout';

const LoginPage = lazy(() => import('src/pages/auth/login'));
const RegisterPage = lazy(() => import('src/pages/auth/register'));
const ForgotPasswordPage = lazy(() => import('src/pages/auth/forgot-password'));
const ResetPasswordPage = lazy(() => import('src/pages/auth/reset-password'));
const ChangePasswordPage = lazy(() => import('src/pages/auth/change-password'));
const VerifyCodePage = lazy(() => import('src/pages/auth/verify-code'));

export const authRoutes: RouteObject[] = [
	{
		path: 'auth',
		element: (
			<AuthClassicLayout>
				<Outlet />
			</AuthClassicLayout>
		),
		children: [
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
			{
				path: 'forgot-password',
				element: <ForgotPasswordPage />,
			},
			{
				path: 'reset-password',
				element: <ResetPasswordPage />,
			},
			{
				path: 'change-password',
				element: <ChangePasswordPage />,
			},
			{
				path: 'verify-code',
				element: <VerifyCodePage />,
			},
		],
	},
];
