import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { BreadcrumbsSeparator } from 'src/components/breadcrumbs-separator';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import { TransactionCreateForm } from 'src/sections/dashboard/transaction/transaction-create-form';

const Page = () => {
	usePageView();

	return (
		<>
			<Seo title="Dashboard:  Transaction Create" />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Stack spacing={3}>
						<Stack spacing={1}>
							<Typography variant="h4">Create a new transaction</Typography>
							<Breadcrumbs separator={<BreadcrumbsSeparator />}>
								<Link
									color="text.primary"
									component={RouterLink}
									href={paths.dashboard.index}
									variant="subtitle2"
								>
									Dashboard
								</Link>
								<Link
									color="text.primary"
									component={RouterLink}
									href={paths.dashboard.transactions.index}
									variant="subtitle2"
								>
									Transactions
								</Link>
								<Typography
									color="text.secondary"
									variant="subtitle2"
								>
									Create
								</Typography>
							</Breadcrumbs>
						</Stack>
						<TransactionCreateForm />
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Page;
