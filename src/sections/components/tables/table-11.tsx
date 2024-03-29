import type { FC } from 'react';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';

interface LoanItem {
	id: string;
	billingCycle: string;
	currency: string;
	name: string;
	quantity: number;
	unitAmount: number;
}

const loanItems: LoanItem[] = [
	{
		id: '5ecb8abbdd6dfb1f9d6bf98b',
		billingCycle: 'monthly',
		currency: '$',
		name: 'Project Points',
		quantity: 25,
		unitAmount: 50.25,
	},
	{
		id: '5ecb8ac10f116d04bed990eb',
		billingCycle: 'monthly',
		currency: '$',
		name: 'Freelancer Subscription',
		quantity: 1,
		unitAmount: 5.0,
	},
];

export const Table11: FC = () => (
	<Box
		sx={{
			backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100'),
			p: 3,
		}}
	>
		<Card>
			<CardHeader title="Loan items" />
			<Divider />
			<Scrollbar>
				<Table sx={{ minWidth: 700 }}>
					<TableHead>
						<TableRow>
							<TableCell>Description</TableCell>
							<TableCell>Billing Cycle</TableCell>
							<TableCell>Amount</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loanItems.map((item) => {
							const unitAmount = numeral(item.unitAmount).format(`${item.currency}0,0.00`);
							const description = `${item.quantity} x ${item.name}`;

							return (
								<TableRow key={item.id}>
									<TableCell>
										<Typography variant="subtitle2">{description}</Typography>
									</TableCell>
									<TableCell>{item.billingCycle}</TableCell>
									<TableCell>{unitAmount}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Scrollbar>
			<TablePagination
				component="div"
				count={loanItems.length}
				onPageChange={(): void => {}}
				onRowsPerPageChange={(): void => {}}
				page={0}
				rowsPerPage={5}
				rowsPerPageOptions={[5, 10, 25]}
			/>
		</Card>
	</Box>
);
