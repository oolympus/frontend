import type { ChangeEvent, FC, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import type { SeverityPillColor } from 'src/components/severity-pill';
import { SeverityPill } from 'src/components/severity-pill';
import type { Loan, LoanStatus } from 'src/types/loan';

const statusMap: Record<LoanStatus, SeverityPillColor> = {
	complete: 'success',
	pending: 'info',
	canceled: 'warning',
	rejected: 'error',
};

interface LoanListTableProps {
	count?: number;
	items?: Loan[];
	onPageChange?: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
	onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	onSelect?: (loanId: string) => void;
	page?: number;
	rowsPerPage?: number;
}

export const LoanListTable: FC<LoanListTableProps> = (props) => {
	const {
		count = 0,
		items = [],
		onPageChange = () => {},
		onRowsPerPageChange,
		onSelect,
		page = 0,
		rowsPerPage = 0,
	} = props;

	return (
		<div>
			<Table>
				<TableBody>
					{items.map((loan) => {
						const createdAtMonth = format(new Date(loan.application_time), 'MMMM').slice(0, 3);
						const createdAtDay = format(new Date(loan.application_time), 'dd');
						const totalAmount = numeral(loan.amount_payable).format(`$0,0.00`);
						const statusColor = statusMap[loan.loan_status] || 'warning';

						return (
							<TableRow
								hover
								key={loan.id}
								onClick={() => onSelect?.(loan.id)}
								sx={{ cursor: 'pointer' }}
							>
								<TableCell
									sx={{
										alignItems: 'center',
										display: 'flex',
									}}
								>
									<Box
										sx={{
											backgroundColor: (theme) =>
												theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.200',
											borderRadius: 2,
											maxWidth: 'fit-content',
											ml: 3,
											p: 1,
										}}
									>
										<Typography
											align="center"
											variant="subtitle2"
										>
											{createdAtMonth}
										</Typography>
										<Typography
											align="center"
											variant="h6"
										>
											{createdAtDay}
										</Typography>
									</Box>
									<Box sx={{ ml: 2 }}>
										<Typography variant="subtitle2">{loan.id}</Typography>
										<Typography
											color="text.secondary"
											variant="body2"
										>
											Total of {totalAmount}
										</Typography>
									</Box>
								</TableCell>
								<TableCell align="right">
									<SeverityPill color={statusColor}>{loan.loan_status}</SeverityPill>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
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

LoanListTable.propTypes = {
	count: PropTypes.number,
	items: PropTypes.array,
	onPageChange: PropTypes.func,
	onRowsPerPageChange: PropTypes.func,
	onSelect: PropTypes.func,
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
};
