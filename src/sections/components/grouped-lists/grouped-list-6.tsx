import type { FC } from 'react';
import { format, subDays } from 'date-fns';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const now = new Date();

interface Transaction {
	id: string;
	amount: number;
	currency: string;
	createdAt: number;
	sender: string;
	type: string;
}

const transactions: Transaction[] = [
	{
		id: 'd46800328cd510a668253b45',
		amount: 25000,
		currency: 'usd',
		createdAt: now.getTime(),
		sender: 'Olympus',
		type: 'receive',
	},
	{
		id: 'b4b19b21656e44b487441c50',
		amount: 6843,
		currency: 'usd',
		createdAt: subDays(now, 1).getTime(),
		sender: 'Zimbru',
		type: 'send',
	},
	{
		id: '56c09ad91f6d44cb313397db',
		amount: 91823,
		currency: 'usd',
		createdAt: subDays(now, 1).getTime(),
		sender: 'Vertical Jelly',
		type: 'send',
	},
	{
		id: 'aaeb96c5a131a55d9623f44d',
		amount: 49550,
		currency: 'usd',
		createdAt: subDays(now, 3).getTime(),
		sender: 'Olympus',
		type: 'receive',
	},
];

export const GroupedList6: FC = () => (
	<Box
		sx={{
			backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100'),
			p: 3,
		}}
	>
		<Card>
			<CardHeader title="Latest Transactions" />
			<Divider />
			<Table>
				<TableBody>
					{transactions.map((transaction) => {
						const createdAtMonth = format(transaction.createdAt, 'LLL').toUpperCase();
						const createdAtDay = format(transaction.createdAt, 'd');
						const type = transaction.type === 'receive' ? 'Payment received' : 'Payment sent';
						const amount =
							(transaction.type === 'receive' ? '+' : '-') +
							' ' +
							numeral(transaction.amount).format('$0,0.00');
						const amountColor = transaction.type === 'receive' ? 'success.main' : 'error.main';

						return (
							<TableRow
								key={transaction.id}
								sx={{
									'&:last-child td, &:last-child th': { border: 0 },
								}}
							>
								<TableCell width={100}>
									<Box sx={{ p: 1 }}>
										<Typography
											align="center"
											color="text.secondary"
											variant="subtitle2"
										>
											{createdAtMonth}
										</Typography>
										<Typography
											align="center"
											color="text.secondary"
											variant="h6"
										>
											{createdAtDay}
										</Typography>
									</Box>
								</TableCell>
								<TableCell>
									<Typography variant="subtitle2">{transaction.sender}</Typography>
									<Typography
										color="text.secondary"
										variant="body2"
									>
										{type}
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography
										color={amountColor}
										variant="subtitle2"
									>
										{amount}
									</Typography>
									<Typography
										color="text.secondary"
										variant="body2"
									>
										{transaction.currency.toUpperCase()}
									</Typography>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Card>
	</Box>
);
