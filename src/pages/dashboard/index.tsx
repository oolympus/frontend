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

const now = new Date();

const Page = () => {
	const settings = useSettings();

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
							<OverviewCompletedLoans amount={31} />
						</Grid>
						<Grid
							xs={12}
							md={3}
						>
							<OverviewPendingLoans amount={12} />
						</Grid>
						<Grid
							xs={12}
							md={3}
						>
							<OverviewActiveLoans amount={5} />
						</Grid>
						<Grid
							xs={12}
							md={3}
						>
							<OverviewCancelledLoans amount={1} />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Page;
