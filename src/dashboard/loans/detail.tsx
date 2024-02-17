import { useCallback, useEffect, useState } from 'react';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import CalendarIcon from '@untitled-ui/icons-react/build/esm/Calendar';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import { LoanSummary } from 'src/sections/dashboard/loan/loan-summary';
import { loansApi } from 'src/api/loans';
import { Loan } from 'src/types/loan';

const useLoan = (): Loan | null => {
	const isMounted = useMounted();
	const [loan, setLoan] = useState<Loan | null>(null);

	const handleLoanGet = useCallback(async () => {
		try {
			const response = await loansApi.getLoan();

			if (isMounted()) {
				setLoan(response);
			}
		} catch (err) {
			console.error(err);
		}
	}, [isMounted]);

	useEffect(
		() => {
			handleLoanGet();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return loan;
};

const Page = () => {
	const loan = useLoan();

	usePageView();

	if (!loan) {
		return null;
	}

	const createdAt = new Date(loan.application_time).toLocaleString();

	return (
		<>
			<Seo title="Dashboard: Loan Details" />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="lg">
					<Stack spacing={4}>
						<div>
							<Link
								color="text.primary"
								component={RouterLink}
								href={paths.dashboard.loans.index}
								sx={{
									alignItems: 'center',
									display: 'inline-flex',
								}}
								underline="hover"
							>
								<SvgIcon sx={{ mr: 1 }}>
									<ArrowLeftIcon />
								</SvgIcon>
								<Typography variant="subtitle2">Loans</Typography>
							</Link>
						</div>
						<div>
							<Stack
								alignItems="flex-start"
								direction="row"
								justifyContent="space-between"
								spacing={3}
							>
								<Stack spacing={1}>
									<Typography variant="h4">{loan.id}</Typography>
									<Stack
										alignItems="center"
										direction="row"
										spacing={1}
									>
										<Typography
											color="text.secondary"
											variant="body2"
										>
											Placed on
										</Typography>
										<SvgIcon color="action">
											<CalendarIcon />
										</SvgIcon>
										<Typography variant="body2">{createdAt}</Typography>
									</Stack>
								</Stack>
								<div>
									<Stack
										alignItems="center"
										direction="row"
										spacing={2}
									>
										<Button
											color="inherit"
											endIcon={
												<SvgIcon>
													<Edit02Icon />
												</SvgIcon>
											}
										>
											Edit
										</Button>
										<Button
											endIcon={
												<SvgIcon>
													<ChevronDownIcon />
												</SvgIcon>
											}
											variant="contained"
										>
											Action
										</Button>
									</Stack>
								</div>
							</Stack>
						</div>
						<LoanSummary loan={loan} />
						{/* <LoanItems items={loan.items || []} /> */}
						{/* <LoanLogs logs={loan.logs || []} /> */}
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Page;
