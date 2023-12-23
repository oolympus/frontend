import type { FC } from 'react';
import { format, subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import numeral from 'numeral';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';
import type { SeverityPillColor } from 'src/components/severity-pill';
import { SeverityPill } from 'src/components/severity-pill';

type LoanStatus = 'complete' | 'pending' | 'rejected';

interface Loan {
	id: string;
	createdAt: number;
	customer: {
		email: string;
		name: string;
	};
	currency: string;
	items: number;
	number: string;
	status: LoanStatus;
	totalAmount: number;
}

const now = new Date();

const loans: Loan[] = [
	{
		id: '5eff2548979e396cb4b000ba',
		createdAt: subMinutes(subSeconds(now, 10), 7).getTime(),
		customer: {
			email: 'ekaterina@olympus.com',
			name: 'Ekaterina Tankova',
		},
		currency: '$',
		items: 7,
		number: 'DEV-1042',
		status: 'pending',
		totalAmount: 524.0,
	},
	{
		id: '5eff254e46b753a166e7d7af',
		createdAt: subHours(subMinutes(subSeconds(now, 50), 12), 2).getTime(),
		customer: {
			email: 'carson.darrin@olympus.com',
			name: 'Carson Darrin',
		},
		currency: '$',
		items: 8,
		number: 'DEV-1041',
		status: 'complete',
		totalAmount: 693.0,
	},
	{
		id: '5eff2553e1c551e2e28a9205',
		createdAt: subHours(subMinutes(subSeconds(now, 12), 39), 5).getTime(),
		customer: {
			email: 'fran.perez@olympus.com',
			name: 'Fran Perez',
		},
		currency: '$',
		items: 4,
		number: 'DEV-1040',
		status: 'rejected',
		totalAmount: 215.0,
	},
	{
		id: '5eff25590f3e28f013c39a0e',
		createdAt: subHours(subMinutes(subSeconds(now, 21), 46), 5).getTime(),
		customer: {
			email: 'anje.keiser@olympus.com',
			name: 'Jie Yan Song',
		},
		currency: '$',
		items: 1,
		number: 'DEV-1039',
		status: 'pending',
		totalAmount: 25.0,
	},
	{
		id: '5eff255f57499089243805d8',
		createdAt: subHours(subMinutes(subSeconds(now, 54), 19), 8).getTime(),
		customer: {
			name: 'Clarke Gillebert',
			email: 'clarke.gillebert@olympus.com',
		},
		currency: '$',
		items: 5,
		number: 'DEV-1038',
		status: 'complete',
		totalAmount: 535.0,
	},
	{
		id: '5eff25658d416fc5adb96a3a',
		createdAt: subDays(subMinutes(subSeconds(now, 12), 45), 1).getTime(),
		customer: {
			email: 'nasimiyu.danai@olympus.com',
			name: 'Nasimiyu Danai',
		},
		currency: '$',
		items: 2,
		number: 'DEV-1037',
		status: 'complete',
		totalAmount: 56.0,
	},
];

const labelColors: Record<LoanStatus, SeverityPillColor> = {
	complete: 'success',
	pending: 'warning',
	rejected: 'error',
};

export const Table1: FC = () => (
	<Box
		sx={{
			backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100'),
			p: 3,
		}}
	>
		<Card>
			<CardHeader
				action={
					<IconButton>
						<SvgIcon>
							<DotsHorizontalIcon />
						</SvgIcon>
					</IconButton>
				}
				title="Latest Loans"
			/>
			<Divider />
			<Scrollbar>
				<Table sx={{ minWidth: 700 }}>
					<TableHead>
						<TableRow>
							<TableCell sortDirection="desc">
								<Tooltip
									enterDelay={300}
									title="Sort"
								>
									<TableSortLabel
										active
										direction="desc"
									>
										Number
									</TableSortLabel>
								</Tooltip>
							</TableCell>
							<TableCell>Customer</TableCell>
							<TableCell>Items</TableCell>
							<TableCell>Total</TableCell>
							<TableCell>Status</TableCell>
							<TableCell align="right">Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loans.map((loan) => {
							const totalAmount = numeral(loan.totalAmount).format(`${loan.currency}0,0.00`);
							const statusColor = labelColors[loan.status];
							const createdAt = format(loan.createdAt, 'dd MMM, yyyy HH:mm:ss');

							return (
								<TableRow
									hover
									key={loan.id}
								>
									<TableCell>
										<Typography variant="subtitle2">{loan.number}</Typography>
									</TableCell>
									<TableCell>{loan.customer.name}</TableCell>
									<TableCell>{loan.items}</TableCell>
									<TableCell>{totalAmount}</TableCell>
									<TableCell>
										<SeverityPill color={statusColor}>{loan.status}</SeverityPill>
									</TableCell>
									<TableCell align="right">{createdAt}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Scrollbar>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					p: 2,
				}}
			>
				<Button
					color="inherit"
					endIcon={
						<SvgIcon>
							<ChevronRightIcon />
						</SvgIcon>
					}
					size="small"
				>
					See All
				</Button>
			</Box>
		</Card>
	</Box>
);
