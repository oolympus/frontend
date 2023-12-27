import type { ChangeEvent, FC, MouseEvent } from 'react';
import { Fragment, useCallback, useState } from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LinearProgress from '@mui/material/LinearProgress';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import type { Transaction } from 'src/types/transaction';

interface CategoryOption {
	label: string;
	value: string;
}

const categoryOptions: CategoryOption[] = [
	{
		label: 'Healthcare',
		value: 'healthcare',
	},
	{
		label: 'Makeup',
		value: 'makeup',
	},
	{
		label: 'Dress',
		value: 'dress',
	},
	{
		label: 'Skincare',
		value: 'skincare',
	},
	{
		label: 'Jewelry',
		value: 'jewelry',
	},
	{
		label: 'Blouse',
		value: 'blouse',
	},
];

interface TransactionListTableProps {
	count?: number;
	items?: Transaction[];
	onPageChange?: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
	onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	page?: number;
	rowsPerPage?: number;
}

export const TransactionListTable: FC<TransactionListTableProps> = (props) => {
	const {
		count = 0,
		items = [],
		onPageChange = () => {},
		onRowsPerPageChange,
		page = 0,
		rowsPerPage = 0,
	} = props;
	const [currentTransaction, setCurrentTransaction] = useState<string | null>(null);

	const handleTransactionToggle = useCallback((transactionId: string): void => {
		setCurrentTransaction((prevTransactionId) => {
			if (prevTransactionId === transactionId) {
				return null;
			}

			return transactionId;
		});
	}, []);

	const handleTransactionClose = useCallback((): void => {
		setCurrentTransaction(null);
	}, []);

	const handleTransactionUpdate = useCallback((): void => {
		setCurrentTransaction(null);
		toast.success('Transaction updated');
	}, []);

	const handleTransactionDelete = useCallback((): void => {
		toast.error('Transaction cannot be deleted');
	}, []);

	return (
		<div>
			<Scrollbar>
				<Table sx={{ minWidth: 1200 }}>
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell width="25%">Name</TableCell>
							<TableCell width="25%">Stock</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>sku</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((transaction) => {
							const isCurrent = transaction.id === currentTransaction;
							const price = numeral(transaction.price).format(`${transaction.currency}0,0.00`);
							const quantityColor = transaction.quantity >= 10 ? 'success' : 'error';
							const statusColor = transaction.status === 'published' ? 'success' : 'info';
							const hasManyVariants = transaction.variants > 1;

							return (
								<Fragment key={transaction.id}>
									<TableRow
										hover
										key={transaction.id}
									>
										<TableCell
											padding="checkbox"
											sx={{
												...(isCurrent && {
													position: 'relative',
													'&:after': {
														position: 'absolute',
														content: '" "',
														top: 0,
														left: 0,
														backgroundColor: 'primary.main',
														width: 3,
														height: 'calc(100% + 1px)',
													},
												}),
											}}
											width="25%"
										>
											<IconButton onClick={() => handleTransactionToggle(transaction.id)}>
												<SvgIcon>{isCurrent ? <ChevronDownIcon /> : <ChevronRightIcon />}</SvgIcon>
											</IconButton>
										</TableCell>
										<TableCell width="25%">
											<Box
												sx={{
													cursor: 'pointer',
													ml: 2,
												}}
											>
												<Typography variant="subtitle2">{transaction.name}</Typography>
												<Typography
													color="text.secondary"
													variant="body2"
												>
													in {transaction.category}
												</Typography>
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
									{isCurrent && (
										<TableRow>
											<TableCell
												colSpan={7}
												sx={{
													p: 0,
													position: 'relative',
													'&:after': {
														position: 'absolute',
														content: '" "',
														top: 0,
														left: 0,
														backgroundColor: 'primary.main',
														width: 3,
														height: 'calc(100% + 1px)',
													},
												}}
											>
												<CardContent>
													<Grid
														container
														spacing={3}
													>
														<Grid
															item
															md={6}
															xs={12}
														>
															<Divider
																sx={{
																	my: 2,
																}}
															/>
															<Grid
																container
																spacing={3}
															>
																<Grid
																	item
																	md={6}
																	xs={12}
																>
																	<TextField
																		defaultValue={transaction.name}
																		fullWidth
																		label="Transaction name"
																		name="name"
																	/>
																</Grid>
																<Grid
																	item
																	md={6}
																	xs={12}
																>
																	<TextField
																		defaultValue={transaction.sku}
																		disabled
																		fullWidth
																		label="SKU"
																		name="sku"
																	/>
																</Grid>
																<Grid
																	item
																	md={6}
																	xs={12}
																>
																	<TextField
																		defaultValue={transaction.category}
																		fullWidth
																		label="Category"
																		select
																	>
																		{categoryOptions.map((option) => (
																			<MenuItem
																				key={option.value}
																				value={option.value}
																			>
																				{option.label}
																			</MenuItem>
																		))}
																	</TextField>
																</Grid>
																<Grid
																	item
																	md={6}
																	xs={12}
																>
																	<TextField
																		defaultValue={transaction.id}
																		disabled
																		fullWidth
																		label="Barcode"
																		name="barcode"
																	/>
																</Grid>
															</Grid>
														</Grid>
														<Grid
															item
															md={6}
															xs={12}
														>
															<Divider
																sx={{
																	my: 2,
																}}
															/>
															<Grid
																container
																spacing={3}
															>
																<Grid
																	item
																	md={6}
																	xs={12}
																>
																	<TextField
																		defaultValue={transaction.price}
																		fullWidth
																		label="Old price"
																		name="old-price"
																		InputProps={{
																			startAdornment: (
																				<InputAdornment position="start">
																					{transaction.currency}
																				</InputAdornment>
																			),
																		}}
																		type="number"
																	/>
																</Grid>
																<Grid
																	item
																	md={6}
																	xs={12}
																>
																	<TextField
																		defaultValue={transaction.price}
																		fullWidth
																		label="New price"
																		name="new-price"
																		InputProps={{
																			startAdornment: (
																				<InputAdornment position="start">$</InputAdornment>
																			),
																		}}
																		type="number"
																	/>
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</CardContent>
												<Divider />
												<Stack
													alignItems="center"
													direction="row"
													justifyContent="space-between"
													sx={{
														p: 2,
													}}
												>
													<Stack
														alignItems="center"
														direction="row"
														spacing={2}
													>
														<Button
															onClick={handleTransactionUpdate}
															type="submit"
															variant="contained"
														>
															Update
														</Button>
														<Button
															color="inherit"
															onClick={handleTransactionClose}
														>
															Cancel
														</Button>
													</Stack>
													<div>
														<Button
															onClick={handleTransactionDelete}
															color="error"
														>
															Delete transaction
														</Button>
													</div>
												</Stack>
											</TableCell>
										</TableRow>
									)}
								</Fragment>
							);
						})}
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
