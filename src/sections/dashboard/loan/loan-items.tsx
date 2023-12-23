import type { FC } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import type { LoanItem } from 'src/types/loan';
import { Scrollbar } from 'src/components/scrollbar';

interface LoanItemsProps {
	items: LoanItem[];
}

export const LoanItems: FC<LoanItemsProps> = (props) => {
	const { items, ...other } = props;

	return (
		<Card {...other}>
			<CardHeader title="Loan items" />
			<Scrollbar>
				<Box sx={{ minWidth: 700 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Description</TableCell>
								<TableCell>Billing Cycle</TableCell>
								<TableCell>Amount</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{items.map((item) => {
								const title = `${item.name} x ${item.quantity}`;
								const unitAmount = numeral(item.unitAmount).format(`${item.currency}0,0.00`);

								return (
									<TableRow key={item.id}>
										<TableCell>
											<Typography variant="subtitle2">{title}</Typography>
										</TableCell>
										<TableCell>{item.billingCycle}</TableCell>
										<TableCell>{unitAmount}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Box>
			</Scrollbar>
			<TablePagination
				component="div"
				count={items.length}
				onPageChange={(): void => {}}
				onRowsPerPageChange={(): void => {}}
				page={0}
				rowsPerPage={5}
				rowsPerPageOptions={[5, 10, 25]}
			/>
		</Card>
	);
};

LoanItems.propTypes = {
	items: PropTypes.array.isRequired,
};
