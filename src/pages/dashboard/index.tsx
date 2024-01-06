import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { OverviewCompletedLoans } from 'src/sections/dashboard/overview/overview-completed-loans';
import { OverviewPendingLoans } from 'src/sections/dashboard/overview/overview-pending-loans';
import { OverviewActiveLoans } from 'src/sections/dashboard/overview/overview-active-loans';
import { OverviewCancelledLoans } from 'src/sections/dashboard/overview/overview-cancelled-loans';
import api from 'src/utils/axios-instance';
import { useCallback, useRef } from 'react';

const now = new Date();

interface Stats {
	pending_loans: number
	active_loans: number
	completed_loans: number
	cancelled_loans: number
}

const Page = () => {
	const settings = useSettings();
	const statRef = useRef<Stats>( {
		pending_loans: 0,
		active_loans: 0,
		completed_loans: 0,
		cancelled_loans: 0,
	} )
	const axios = api()

	const handleGetDashboardStats = useCallback( async () => {
		const response = await axios.get( "/dashboard" )
		statRef.current = response.data?.data[0]
	}, [axios] )

	handleGetDashboardStats()

	usePageView();

	return (
		<>
			<Seo title="Dashboard: Overview" />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth={settings.stretch ? false : 'xl'}>
					<Grid
						container
						disableEqualOverflow
						spacing={{
							xs: 3,
							lg: 4,
						}}
					>
						<Grid xs={12}>
							<Stack
								direction="row"
								justifyContent="space-between"
								spacing={4}
							>
								<div>
									<Typography variant="h4">Overview</Typography>
								</div>
							</Stack>
						</Grid>
						<Grid
							xs={12}
							md={3}
						>
							<OverviewCompletedLoans amount={statRef.current.completed_loans} />
						</Grid>
						<Grid
							xs={12}
							md={3}
						>
							<OverviewPendingLoans amount={statRef.current.pending_loans} />
						</Grid>
						<Grid
							xs={12}
							md={3}
						>
							<OverviewActiveLoans amount={statRef.current.active_loans} />
						</Grid>
						<Grid
							xs={12}
							md={3}
						>
							<OverviewCancelledLoans amount={statRef.current.cancelled_loans} />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Page;
