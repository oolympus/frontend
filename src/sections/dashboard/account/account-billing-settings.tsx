import type { FC } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';

import { Customer } from 'src/types/customer';
import { paths } from 'src/paths';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Loan } from 'src/types/loan';

interface AccountDetailsSettingsProps {
	plan?: string;
	loans?: Loan[];
	user: Customer;
}

export const AccountDetailsSettings: FC<AccountDetailsSettingsProps> = (props) => {
	const { user, loans = [] } = props;

	return (
		<Stack
			spacing={4}
			{...props}
		>
			<Card>
				<CardContent sx={{ pt: 0 }}>
					<Box
						sx={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: 2,
						}}
					>
						<Typography variant="h6">Details</Typography>
					</Box>
					<Box
						sx={{
							border: 1,
							borderColor: 'divider',
							borderRadius: 1,
							mt: 3,
						}}
					>
						<PropertyList>
							<PropertyListItem
								align="horizontal"
								divider
								label="ID"
								value={user.id}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="username"
								value={user.username}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Email"
								value={user.email}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Card number"
								value={user.financial_information}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Address"
								value={user.address}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="First name"
								value={user.first_name}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Phone"
								value={user.telephone}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Surname"
								value={user.surname}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Gaurantor Primary"
								value={user.guarantors[0]}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Gaurantor Secondary"
								value={user.guarantors[1]}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Last Login"
								value={user.last_login}
							/>
							<PropertyListItem
								align="horizontal"
								divider
								label="Last Login"
								value={user.last_login}
							/>
						</PropertyList>
					</Box>
				</CardContent>
			</Card>
			<Card>
				<CardHeader
					title="Loan history"
					subheader="You can view and download all your previous loans here. If you’ve just made a payment, it may take a few hours for it to appear in the table below."
				/>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell>Total</TableCell>
							<TableCell>Billing cyle</TableCell>
							<TableCell>Interest</TableCell>
							<TableCell>Status</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{loans.map((loan) => {
							const createdAt = new Date(loan.application_time).toLocaleDateString();
							const amount = numeral(loan.amount_payable).format('$0,0.00');

							return (
								<TableRow key={loan.id}>
									<TableCell>{createdAt}</TableCell>
									<TableCell>{amount}</TableCell>
									{/* @ts-ignore */}
									<TableCell>{loan.amount_payable}</TableCell>
									<TableCell>{loan.interest}</TableCell>
									<TableCell>{loan.loan_status}</TableCell>
									<TableCell align="right">
										<Button
											component={Link}
											to={paths.dashboard.loans.details}
										>
											View Loan
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Card>
		</Stack>
	);
};

AccountDetailsSettings.propTypes = {
	plan: PropTypes.string,
	loans: PropTypes.array,
};
