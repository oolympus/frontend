import type { ChangeEvent, FC, MouseEvent } from 'react';
import { Fragment } from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import type { Transaction } from 'src/types/transaction';

interface TransactionListTableProps {
	count?: number;
	items?: Transaction[];
	onPageChange?: ( event: MouseEvent<HTMLButtonElement> | null, newPage: number ) => void;
	onRowsPerPageChange?: ( event: ChangeEvent<HTMLInputElement> ) => void;
	page?: number;
	rowsPerPage?: number;
}

export const TransactionListTable: FC<TransactionListTableProps> = ( props ) => {
	const {
		count = 0,
		items = [],
		onPageChange = () => { },
		onRowsPerPageChange,
		page = 0,
		rowsPerPage = 0,
	} = props;

	return (
		<div>
			<Scrollbar>
				<Table sx={{ minWidth: 1200 }}>
					<TableHead>
						<TableRow>
							<TableCell width="25%">Name</TableCell>
							<TableCell width="25%">Stock</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>sku</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map( ( transaction ) => {
							const price = numeral( transaction.price ).format( `${transaction.currency}0,0.00` );
							const quantityColor = transaction.quantity >= 10 ? 'success' : 'error';
							const statusColor = transaction.status === 'approved' ? 'success' : 'info';
							const hasManyVariants = transaction.variants > 1;

							return (
								<Fragment key={transaction.id}>
									<TableRow
										hover
										key={transaction.id}
									>
										<TableCell width="25%">
											<Box
												sx={{
													cursor: 'pointer',
													ml: 2,
												}}
											>
												<Typography variant="subtitle2">{transaction.name}</Typography>
											</Box>
										</TableCell>
										<TableCell width="25%">
											<LinearProgress
												value={transaction.quantity}
												variant="determinate"
												color={quantityColor}
												sx={{
													height: 8,
													width: 36,
												}}
											/>
											<Typography
												color="text.secondary"
												variant="body2"
											>
												{transaction.quantity} in stock
												{hasManyVariants && ` in ${transaction.variants} variants`}
											</Typography>
										</TableCell>
										<TableCell>{price}</TableCell>
										<TableCell>{transaction.sku}</TableCell>
										<TableCell>
											<SeverityPill color={statusColor}>{transaction.status}</SeverityPill>
										</TableCell>
									</TableRow>
								</Fragment>
							);
						} )}
					</TableBody>
				</Table>
			</Scrollbar>
			<TablePagination
				component="div"
				count={count}
				onPageChange={onPageChange}
				onRowsPerPageChange={onRowsPerPageChange}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[5, 10, 25]}
			/>
		</div>
	);
};

TransactionListTable.propTypes = {
	count: PropTypes.number,
	items: PropTypes.array,
	onPageChange: PropTypes.func,
	onRowsPerPageChange: PropTypes.func,
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
};
