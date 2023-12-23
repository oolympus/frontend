import type { FC } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import type { Loan } from 'src/types/loan';
import { getCustomers } from 'src/api/customers/data';

const statusOptions = [
	{
		label: 'Canceled',
		value: 'cancelled',
	},
	{
		label: 'Complete',
		value: 'complete',
	},
	{
		label: 'Pending',
		value: 'pending',
	},
	{
		label: 'Rejected',
		value: 'rejected',
	},
];

interface LoanEditProps {
	onCancel?: () => void;
	onSave?: () => void;
	loan: Loan;
}

export const LoanEdit: FC<LoanEditProps> = ( props ) => {
	const { onCancel, onSave, loan } = props;

	const createdAt = format( new Date( loan.application_time ), 'dd/MM/yyyy HH:mm' );
	const customer = getCustomers( 1 )[0];

	const fullname = `${customer.first_name} ${customer.surname}`;

	return (
		<Stack spacing={6}>
			<Stack spacing={3}>
				<Typography variant="h6">Details</Typography>
				<Stack spacing={3}>
					<TextField
						disabled
						fullWidth
						label="ID"
						name="id"
						value={loan.id}
					/>
					<TextField
						disabled
						fullWidth
						label="Number"
						name="number"
						value={loan.id}
					/>
					<TextField
						disabled
						fullWidth
						label="Customer name"
						name="customer_name"
						value={fullname}
					/>
					<TextField
						disabled
						fullWidth
						label="Date"
						name="date"
						value={createdAt}
					/>
					<TextField
						fullWidth
						label="Address"
						name="address"
						value={customer.address}
					/>
					<TextField
						fullWidth
						label="Total Amount"
						name="amount"
						value={loan.principal}
					/>
					<TextField
						fullWidth
						label="Amount Payable"
						name="amount"
						value={loan.amount_payable}
					/>
					<TextField
						fullWidth
						label="Status"
						name="status"
						select
						SelectProps={{ native: true }}
						value={loan.loan_status}
					>
						{statusOptions.map( ( option ) => (
							<option
								key={option.value}
								value={option.value}
							>
								{option.label}
							</option>
						) )}
					</TextField>
				</Stack>
				<Stack
					alignItems="center"
					direction="row"
					flexWrap="wrap"
					spacing={2}
				>
					<Button
						color="primary"
						onClick={onSave}
						size="small"
						variant="contained"
					>
						Save changes
					</Button>
					<Button
						color="inherit"
						onClick={onCancel}
						size="small"
					>
						Cancel
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

LoanEdit.propTypes = {
	onCancel: PropTypes.func,
	onSave: PropTypes.func,
	// @ts-ignore
	order: PropTypes.object,
};
