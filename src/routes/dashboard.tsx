import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet } from 'react-router-dom';

import { Layout as DashboardLayout } from 'src/layouts/dashboard';

const OverviewPage = lazy(() => import('src/pages/dashboard/index'));

// Academy
const AcademyDashboardPage = lazy(() => import('src/pages/dashboard/academy/dashboard'));
const AcademyCoursePage = lazy(() => import('src/pages/dashboard/academy/course'));

// Blog
const BlogPostListPage = lazy(() => import('src/pages/dashboard/blog/list'));
const BlogPostDetailPage = lazy(() => import('src/pages/dashboard/blog/detail'));
const BlogPostCreatePage = lazy(() => import('src/pages/dashboard/blog/create'));

// Customer
const CustomerListPage = lazy(() => import('src/pages/dashboard/customers/list'));
const CustomerDetailPage = lazy(() => import('src/pages/dashboard/customers/detail'));
const CustomerEditPage = lazy(() => import('src/pages/dashboard/customers/edit'));

// Invoice
const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoices/list'));
const InvoiceDetailPage = lazy(() => import('src/pages/dashboard/invoices/detail'));

// Job
const JobBrowsePage = lazy(() => import('src/pages/dashboard/jobs/browse'));
const JobCreatePage = lazy(() => import('src/pages/dashboard/jobs/create'));
const CompanyDetailPage = lazy(() => import('src/pages/dashboard/jobs/companies/detail'));

// Logistics
const LogisticsDashboardPage = lazy(() => import('src/pages/dashboard/logistics/dashboard'));
const LogisticsFleetPage = lazy(() => import('src/pages/dashboard/logistics/fleet'));

// Loan
const LoanListPage = lazy(() => import('src/pages/dashboard/loans/list'));
const LoanDetailPage = lazy(() => import('src/pages/dashboard/loans/detail'));

//  Transaction
const TransactionListPage = lazy(() => import('src/pages/dashboard/transactions/list'));
const TransactionCreatePage = lazy(() => import('src/pages/dashboard/transactions/create'));

// Social
const SocialFeedPage = lazy(() => import('src/pages/dashboard/social/feed'));
const SocialProfilePage = lazy(() => import('src/pages/dashboard/social/profile'));

// Other
const AccountPage = lazy(() => import('src/pages/dashboard/account'));
const AnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));
const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
const CryptoPage = lazy(() => import('src/pages/dashboard/crypto'));
const EcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const FileManagerPage = lazy(() => import('src/pages/dashboard/file-manager'));
const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));
const MailPage = lazy(() => import('src/pages/dashboard/mail'));

export const dashboardRoutes: RouteObject[] = [
	{
		path: '/',
		element: (
			<DashboardLayout>
				<Suspense>
					<Outlet />
				</Suspense>
			</DashboardLayout>
		),
		children: [
			{
				index: true,
				element: <OverviewPage />,
			},
			{
				path: 'academy',
				children: [
					{
						index: true,
						element: <AcademyDashboardPage />,
					},
					{
						path: 'courses',
						children: [
							{
								path: ':courseId',
								element: <AcademyCoursePage />,
							},
						],
					},
				],
			},
			{
				path: 'blog',
				children: [
					{
						index: true,
						element: <BlogPostListPage />,
					},
					{
						path: 'create',
						element: <BlogPostCreatePage />,
					},
					{
						path: ':postId',
						element: <BlogPostDetailPage />,
					},
				],
			},
			{
				path: 'customers',
				children: [
					{
						index: true,
						element: <CustomerListPage />,
					},
					{
						path: ':customerId',
						element: <CustomerDetailPage />,
					},
					{
						path: ':customerId/edit',
						element: <CustomerEditPage />,
					},
				],
			},
			{
				path: 'invoices',
				children: [
					{
						index: true,
						element: <InvoiceListPage />,
					},
					{
						path: ':invoiceId',
						element: <InvoiceDetailPage />,
					},
				],
			},
			{
				path: 'jobs',
				children: [
					{
						index: true,
						element: <JobBrowsePage />,
					},
					{
						path: 'create',
						element: <JobCreatePage />,
					},
					{
						path: 'companies',
						children: [
							{
								path: ':companyId',
								element: <CompanyDetailPage />,
							},
						],
					},
				],
			},
			{
				path: 'logistics',
				children: [
					{
						index: true,
						element: <LogisticsDashboardPage />,
					},
					{
						path: 'fleet',
						element: <LogisticsFleetPage />,
					},
				],
			},
			{
				path: 'loans',
				children: [
					{
						index: true,
						element: <LoanListPage />,
					},
					{
						path: ':loanId',
						element: <LoanDetailPage />,
					},
				],
			},
			{
				path: 'transactions',
				children: [
					{
						index: true,
						element: <TransactionListPage />,
					},
					{
						path: 'create',
						element: <TransactionCreatePage />,
					},
				],
			},
			{
				path: 'social',
				children: [
					{
						path: 'feed',
						element: <SocialFeedPage />,
					},
					{
						path: 'profile',
						element: <AccountPage />,
					},
				],
			},
			{
				path: 'account',
				element: <AccountPage />,
			},
			{
				path: 'analytics',
				element: <AnalyticsPage />,
			},
			{
				path: 'blank',
				element: <BlankPage />,
			},
			{
				path: 'calendar',
				element: <CalendarPage />,
			},
			{
				path: 'chat',
				element: <ChatPage />,
			},
			{
				path: 'crypto',
				element: <CryptoPage />,
			},
			{
				path: 'ecommerce',
				element: <EcommercePage />,
			},
			{
				path: 'file-manager',
				element: <FileManagerPage />,
			},
			{
				path: 'kanban',
				element: <KanbanPage />,
			},
			{
				path: 'mail',
				element: <MailPage />,
			},
		],
	},
];
