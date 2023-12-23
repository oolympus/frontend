import type { FC } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import type { SeverityPillColor } from 'src/components/severity-pill';
import { SeverityPill } from 'src/components/severity-pill';
import { Scrollbar } from 'src/components/scrollbar';
import type { Loan, LoanStatus } from 'src/types/loan';
import { getCustomers } from 'src/api/customers/data';

const statusMap: Record<LoanStatus, string> = {
	cancelled: 'warning',
	complete: 'success',
	pending: 'info',
	rejected: 'error',
};

interface LoanDetailsProps {
	onApprove?: () => void;
	onEdit?: () => void;
	onReject?: () => void;
	loan: Loan;
}

export const LoanDetails: FC<LoanDetailsProps> = ( props ) => {
	const { onApprove, onEdit, onReject, loan } = props;
	const lgUp = useMediaQuery( ( theme: Theme ) => theme.breakpoints.up( 'lg' ) );

	const align = lgUp ? 'horizontal' : 'vertical';
	const createdAt = format( new Date( loan.application_time ), 'dd/MM/yyyy HH:mm' );
	const statusColor = statusMap[loan.loan_status] as SeverityPillColor;
	const totalAmount = numeral( loan.amount_payable ).format( `$0,0.00` );

	const customer = getCustomers( 1 )[0];

	return (
		<Stack spacing={6}>
			<Stack spacing={3}>
				<Stack
					alignItems="center"
					direction="row"
					justifyContent="space-between"
					spacing={3}
				>
					<Typography variant="h6">Details</Typography>
					<Button
						color="inherit"
						onClick={onEdit}
						size="small"
						startIcon={
							<SvgIcon>
								<Edit02Icon />
							</SvgIcon>
						}
					>
						Edit
					</Button>
				</Stack>
				<PropertyList>
					<PropertyListItem
						align={align}
						disableGutters
						divider
						label="ID"
						value={loan.id}
					/>
					<PropertyListItem
						align={align}
						disableGutters
						divider
						label="Customer"
					>
						<Typography
							color="text.secondary"
							variant="body2"
						>
							{loan.borrowed_by}
						</Typography>
						<Typography
							color="text.secondary"
							variant="body2"
						>
							{customer.username}
						</Typography>
						<Typography
							color="text.secondary"
							variant="body2"
						>
							{customer.address}
						</Typography>
						<Typography
							color="text.secondary"
							variant="body2"
						>
							{customer.first_name}
						</Typography>
						<Typography
							color="text.secondary"
							variant="body2"
						>
							{customer.surname}
						</Typography>
					</PropertyListItem>
					<PropertyListItem
						align={align}
						disableGutters
						divider
						label="Date"
						value={createdAt}
					/>
					<PropertyListItem
						align={align}
						disableGutters
						divider
						label="Principal"
						value={loan.principal}
					/>
					<PropertyListItem
						align={align}
						disableGutters
						divider
						label="Total Amount"
						value={loan.amount_payable}
					/>
					<PropertyListItem
						align={align}
						disableGutters
						divider
						label="Status"
					>
						<SeverityPill color={statusColor}>{loan.loan_status}</SeverityPill>
					</PropertyListItem>
				</PropertyList>
				<Stack
					alignItems="center"
					direction="row"
					flexWrap="wrap"
					justifyContent="flex-end"
					spacing={2}
				>
					<Button
						onClick={onApprove}
						size="small"
						variant="contained"
					>
						Approve
					</Button>
					<Button
						color="error"
						onClick={onReject}
						size="small"
						variant="outlined"
					>
						Reject
					</Button>
				</Stack>
			</Stack>
			<Stack spacing={3}>
				<Typography variant="h6">Loan items</Typography>
				<Scrollbar>
					<Table sx={{ minWidth: 400 }}>
						<TableHead>
							<TableRow>
								<TableCell>Disbursed by</TableCell>
								<TableCell>Percent Interest</TableCell>
								<TableCell>Intervals</TableCell>
								<TableCell>Amount</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>{loan.disbursed_by}</TableCell>
								<TableCell>{loan.percent_interest}</TableCell>
								<TableCell>{loan.payment_intervals}</TableCell>
								<TableCell>{loan.amount_payable}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Scrollbar>
			</Stack>
		</Stack>
	);
};

LoanDetails.propTypes = {
	onApprove: PropTypes.func,
	onEdit: PropTypes.func,
	onReject: PropTypes.func,
	// @ts-ignore
	loan: PropTypes.object,
};
