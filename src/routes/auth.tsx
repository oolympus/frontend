import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet } from 'react-router-dom';

import { GuestGuard } from 'src/guards/guest-guard';
import { Layout as AuthModernLayout } from 'src/layouts/auth/modern-layout';

const LoginPage = lazy( () => import( 'src/pages/auth/login' ) );
const RegisterPage = lazy( () => import( 'src/pages/auth/register' ) );
const ForgotPasswordPage = lazy( () => import( 'src/pages/auth/forgot-password' ) );
const ResetPasswordPage = lazy( () => import( 'src/pages/auth/reset-password' ) );
const VerifyCodePage = lazy( () => import( 'src/pages/auth/verify-code' ) );

export const authRoutes: RouteObject[] = [
	{
		path: 'auth',
		element: (
			<GuestGuard>
				<AuthModernLayout>
					<Outlet />
				</AuthModernLayout>
			</GuestGuard>
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
				path: 'verify-code',
				element: <VerifyCodePage />,
			},
		],
	},
];
