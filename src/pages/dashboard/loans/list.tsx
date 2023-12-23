import type { ChangeEvent, MouseEvent } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { useDialog } from 'src/hooks/use-dialog';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { LoanDrawer } from 'src/sections/dashboard/loan/loan-drawer';
import { LoanListContainer } from 'src/sections/dashboard/loan/loan-list-container';
import { LoanListSearch } from 'src/sections/dashboard/loan/loan-list-search';
import { LoanListTable } from 'src/sections/dashboard/loan/loan-list-table';
import { loansApi } from 'src/api/loans';
import { Loan } from 'src/types/loan';

interface Filters {
	query?: string;
	status?: string;
}

type SortDir = 'asc' | 'desc';

interface LoansSearchState {
	filters: Filters;
	page: number;
	rowsPerPage: number;
	sortBy?: string;
	sortDir?: SortDir;
}

const useLoansSearch = () => {
	const [state, setState] = useState<LoansSearchState>({
		filters: {
			query: undefined,
			status: undefined,
		},
		page: 0,
		rowsPerPage: 5,
		sortBy: 'createdAt',
		sortDir: 'desc',
	});

	const handleFiltersChange = useCallback((filters: Filters): void => {
		setState((prevState) => ({
			...prevState,
			filters,
		}));
	}, []);

	const handleSortChange = useCallback((sortDir: SortDir): void => {
		setState((prevState) => ({
			...prevState,
			sortDir,
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
		handleSortChange,
		handlePageChange,
		handleRowsPerPageChange,
		state,
	};
};

interface LoansStoreState {
	loans: Loan[];
	loansCount: number;
}

const useLoansStore = (searchState: LoansSearchState) => {
	const isMounted = useMounted();
	const [state, setState] = useState<LoansStoreState>({
		loans: [],
		loansCount: 0,
	});

	const handleLoansGet = useCallback(async () => {
		try {
			const response = await loansApi.getLoans(searchState);

			if (isMounted()) {
				setState({
					loans: response.data,
					loansCount: response.count,
				});
			}
		} catch (err) {
			console.error(err);
		}
	}, [searchState, isMounted]);

	useEffect(
		() => {
			handleLoansGet();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[searchState]
	);

	return {
		...state,
	};
};

const useCurrentLoan = (loans: Loan[], loanId?: string): Loan | undefined => {
	return useMemo((): Loan | undefined => {
		if (!loanId) {
			return undefined;
		}

		return loans.find((loan) => loan.id === loanId);
	}, [loans, loanId]);
};

const Page = () => {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const loansSearch = useLoansSearch();
	const loansStore = useLoansStore(loansSearch.state);
	const dialog = useDialog<string>();
	const currentLoan = useCurrentLoan(loansStore.loans, dialog.data);

	usePageView();

	const handleLoanOpen = useCallback(
		(loanId: string): void => {
			// Close drawer if is the same loan

			if (dialog.open && dialog.data === loanId) {
				dialog.handleClose();
				return;
			}

			dialog.handleOpen(loanId);
		},
		[dialog]
	);

	return (
		<>
			<Seo title="Dashboard: Loan List" />
			<Divider />
			<Box
				component="main"
				ref={rootRef}
				sx={{
					display: 'flex',
					flex: '1 1 auto',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				<Box
					ref={rootRef}
					sx={{
						bottom: 0,
						display: 'flex',
						left: 0,
						position: 'absolute',
						right: 0,
						top: 0,
					}}
				>
					<LoanListContainer open={dialog.open}>
						<Box sx={{ p: 3 }}>
							<Stack
								alignItems="flex-start"
								direction="row"
								justifyContent="space-between"
								spacing={4}
							>
								<div>
									<Typography variant="h4">Loans</Typography>
								</div>
								<div>
									<Button
										startIcon={
											<SvgIcon>
												<PlusIcon />
											</SvgIcon>
										}
										variant="contained"
									>
										Add
									</Button>
								</div>
							</Stack>
						</Box>
						<Divider />
						<LoanListSearch
							onFiltersChange={loansSearch.handleFiltersChange}
							onSortChange={loansSearch.handleSortChange}
							sortBy={loansSearch.state.sortBy}
							sortDir={loansSearch.state.sortDir}
						/>
						<Divider />
						<LoanListTable
							count={loansStore.loansCount}
							items={loansStore.loans}
							onPageChange={loansSearch.handlePageChange}
							onRowsPerPageChange={loansSearch.handleRowsPerPageChange}
							onSelect={handleLoanOpen}
							page={loansSearch.state.page}
							rowsPerPage={loansSearch.state.rowsPerPage}
						/>
					</LoanListContainer>
					<LoanDrawer
						container={rootRef.current}
						onClose={dialog.handleClose}
						open={dialog.open}
						loan={currentLoan}
					/>
				</Box>
			</Box>
		</>
	);
};

export default Page;
