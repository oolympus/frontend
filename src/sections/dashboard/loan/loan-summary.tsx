import type { ChangeEvent, FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import type { Loan } from 'src/types/loan';
import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import { customersApi } from 'src/api/customers';
import { Customer } from 'src/types/customer';

const statusOptions: string[] = ['Canceled', 'Complete', 'Rejected'];

interface LoanSummaryProps {
	loan: Loan;
}

export const LoanSummary: FC<LoanSummaryProps> = (props) => {
	const { loan, ...other } = props;
	const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	const [status, setStatus] = useState<string>(statusOptions[0]);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
		setStatus(event.target.value);
	}, []);

	const [customer, setCustomer] = useState<Customer | undefined>(undefined);

	const handleCustomerGet = useCallback(async (customerId: string) => {
		const response = await customersApi.getCustomer(customerId);
		setCustomer(response);
	}, []);

	useEffect(() => {
		loan && handleCustomerGet(loan?.borrowed_by);
	}, [loan, loan?.borrowed_by, handleCustomerGet]);

	const align = mdUp ? 'horizontal' : 'vertical';
	const createdAt = format(new Date(loan.application_time), 'dd/MM/yyyy HH:mm');
	const fullname = customer ? `${customer.first_name} ${customer.surname}` : 'N/A';

	return (
		<Card {...other}>
			<CardHeader title="Basic info" />
			<Divider />
			<PropertyList>
				<PropertyListItem
					align={align}
					label="Customer"
				>
					<Typography variant="subtitle2">{fullname}</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
					>
						{customer ? customer.email : 'N/A'}
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
					>
						{customer ? customer.telephone : 'N/A'}
					</Typography>
					<Typography
						color="text.secondary"
						variant="body2"
					>
						{customer ? customer.address : 'N/A'}
					</Typography>
				</PropertyListItem>
				<Divider />
				<PropertyListItem
					align={align}
					label="ID"
					value={loan.id}
				/>
				<Divider />
				<PropertyListItem
					align={align}
					label="Date"
					value={createdAt}
				/>
				<Divider />
				<PropertyListItem
					align={align}
					label="Principal"
					value={loan.principal}
				/>
				<Divider />
				<PropertyListItem
					align={align}
					label="Total Amount"
					value={loan.amount_payable}
				/>
				<Divider />
				<PropertyListItem
					align={align}
					label="Status"
				>
					<Stack
						alignItems={{
							xs: 'stretch',
							sm: 'center',
						}}
						direction={{
							xs: 'column',
							sm: 'row',
						}}
						spacing={1}
					>
						<TextField
							label="Status"
							margin="normal"
							name="status"
							onChange={handleChange}
							select
							SelectProps={{ native: true }}
							sx={{
								flexGrow: 1,
								minWidth: 150,
							}}
							value={status}
						>
							{statusOptions.map((option) => (
								<option
									key={option}
									value={option}
								>
									{option}
								</option>
							))}
						</TextField>
						<Button variant="contained">Save</Button>
					</Stack>
				</PropertyListItem>
			</PropertyList>
		</Card>
	);
};

LoanSummary.propTypes = {
	// @ts-ignore
	loan: PropTypes.object.isRequired,
};
