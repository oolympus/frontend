import type { FC } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { paths } from 'src/paths';

interface OverviewCancelledLoansProps {
	amount: number;
}

export const OverviewCancelledLoans: FC<OverviewCancelledLoansProps> = ( props ) => {
	const { amount } = props;

	return (
		<Card>
			<Stack
				alignItems="center"
				direction={{
					xs: 'column',
					sm: 'row',
				}}
				spacing={3}
				sx={{
					px: 4,
					py: 3,
				}}
			>
				<div>
					<img
						src="/assets/iconly/iconly-glass-discount.svg"
						width={48}
					/>
				</div>
				<Box sx={{ flexGrow: 1 }}>
					<Typography
						color="text.secondary"
						variant="body2"
					>
						Cancelled Loans
					</Typography>
					<Typography
						color="text.primary"
						variant="h4"
					>
						{amount}
					</Typography>
				</Box>
			</Stack>
			<Divider />
			<CardActions>
				<Button
					component={Link}
					color="inherit"
					endIcon={
						<SvgIcon>
							<ArrowRightIcon />
						</SvgIcon>
					}
					size="small"
					to={paths.dashboard.loans.index}
				>
					See all loans
				</Button>
			</CardActions>
		</Card>
	);
};

OverviewCancelledLoans.propTypes = {
	amount: PropTypes.number.isRequired,
};
