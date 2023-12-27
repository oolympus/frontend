import type { ChangeEvent, MouseEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { transactionsApi } from 'src/api/transactions';
import { BreadcrumbsSeparator } from 'src/components/breadcrumbs-separator';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import { TransactionListSearch } from 'src/sections/dashboard/transaction/transaction-list-search';
import { TransactionListTable } from 'src/sections/dashboard/transaction/transaction-list-table';
import type { Transaction } from 'src/types/transaction';

interface Filters {
	name?: string;
	category: string[];
	status: string[];
	inStock?: boolean;
}

interface TransactionsSearchState {
	filters: Filters;
	page: number;
	rowsPerPage: number;
}

const useTransactionsSearch = () => {
	const [state, setState] = useState<TransactionsSearchState>({
		filters: {
			name: undefined,
			category: [],
			status: [],
			inStock: undefined,
		},
		page: 0,
		rowsPerPage: 5,
	});

	const handleFiltersChange = useCallback((filters: Filters): void => {
		setState((prevState) => ({
			...prevState,
			filters,
		}));
	}, []);

	const handlePageChange = useCallback(
		(event: MouseEvent<HTMLButtonElement> | null, page: number): void => {
			setState((prevState) => ({
				...prevState,
				page,
			}));
		},
		[]
	);

	const handleRowsPerPageChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
		setState((prevState) => ({
			...prevState,
			rowsPerPage: parseInt(event.target.value, 10),
		}));
	}, []);

	return {
		handleFiltersChange,
		handlePageChange,
		handleRowsPerPageChange,
		state,
	};
};

interface TransactionsStoreState {
	transactions: Transaction[];
	transactionsCount: number;
}

const useTransactionsStore = (searchState: TransactionsSearchState) => {
	const isMounted = useMounted();
	const [state, setState] = useState<TransactionsStoreState>({
		transactions: [],
		transactionsCount: 0,
	});

	const handleTransactionsGet = useCallback(async () => {
		try {
			const response = await transactionsApi.getTransactions(searchState);

			if (isMounted()) {
				setState({
					transactions: response.data,
					transactionsCount: response.count,
				});
			}
		} catch (err) {
			console.error(err);
		}
	}, [searchState, isMounted]);

	useEffect(
		() => {
			handleTransactionsGet();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[searchState]
	);

	return {
		...state,
	};
};

const Page = () => {
	const transactionsSearch = useTransactionsSearch();
	const transactionsStore = useTransactionsStore(transactionsSearch.state);

	usePageView();

	return (
		<>
			<Seo title="Dashboard:  Transaction List" />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Stack spacing={4}>
						<Stack
							direction="row"
							justifyContent="space-between"
							spacing={4}
						>
							<Stack spacing={1}>
								<Typography variant="h4"> Transactions</Typography>
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
										List
									</Typography>
								</Breadcrumbs>
							</Stack>
							<Stack
								alignItems="center"
								direction="row"
								spacing={3}
							>
								<Button
									component={RouterLink}
									href={paths.dashboard.transactions.create}
									startIcon={
										<SvgIcon>
											<PlusIcon />
										</SvgIcon>
									}
									variant="contained"
								>
									Add
								</Button>
							</Stack>
						</Stack>
						<Card>
							<TransactionListSearch onFiltersChange={transactionsSearch.handleFiltersChange} />
							<TransactionListTable
								onPageChange={transactionsSearch.handlePageChange}
								onRowsPerPageChange={transactionsSearch.handleRowsPerPageChange}
								page={transactionsSearch.state.page}
								items={transactionsStore.transactions}
								count={transactionsStore.transactionsCount}
								rowsPerPage={transactionsSearch.state.rowsPerPage}
							/>
						</Card>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Page;
