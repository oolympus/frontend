import { Suspense, lazy } from 'react';
import { Outlet, type RouteObject } from 'react-router';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { Layout as MarketingLayout } from 'src/layouts/marketing';

const Error401Page = lazy(() => import('src/pages/401'));
const Error404Page = lazy(() => import('src/pages/404'));
const Error500Page = lazy(() => import('src/pages/500'));

const ContactPage = lazy(() => import('src/pages/contact'));
const CheckoutPage = lazy(() => import('src/pages/checkout'));

export const routes: RouteObject[] = [
	{
		path: '/marketing',
		element: (
			<MarketingLayout>
				<Suspense>
					<Outlet />
				</Suspense>
			</MarketingLayout>
		),
	},
	...authRoutes,
	...dashboardRoutes,
	{
		path: 'checkout',
		element: <CheckoutPage />,
	},
	{
		path: 'contact',
		element: <ContactPage />,
	},
	{
		path: '401',
		element: <Error401Page />,
	},
	{
		path: '404',
		element: <Error404Page />,
	},
	{
		path: '500',
		element: <Error500Page />,
	},
	{
		path: '*',
		element: <Error404Page />,
	},
];
