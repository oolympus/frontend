import { useState, type FC, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import type { Loan } from 'src/types/loan';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Customer } from 'src/types/customer';
import { customersApi } from 'src/api/customers';

const statusOptions = [
	{
		label: 'Cancelled',
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

export const LoanEdit: FC<LoanEditProps> = (props) => {
	const { onCancel, onSave, loan } = props;
	const [customer, setCustomer] = useState<Customer | undefined>(undefined);

	const createdAt = format(new Date(loan.application_time), 'dd/MM/yyyy HH:mm');

	const handleCustomerGet = useCallback(async (customerId: string) => {
		const response = await customersApi.getCustomer(customerId);
		setCustomer(response);
	}, []);

	useEffect(() => {
		handleCustomerGet(loan.borrowed_by);
	}, [handleCustomerGet, loan.borrowed_by]);

	const fullname = `${customer ? customer?.first_name : ''} ${customer ? customer.surname : ''}`;

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
						value={customer ? customer.address : ''}
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
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<InputLabel id="payment_interval">Status</InputLabel>
						<Select
							labelId="payment_interval"
							name="payment_interval"
							id="payment_interval"
							value={loan.loan_status}
							label="Payment Interval"
						>
							{statusOptions.map((option) => (
								<MenuItem
									key={option.value}
									value={option.value}
								>
									{option.label.toUpperCase()}
								</MenuItem>
							))}
						</Select>
					</FormControl>
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
