import type { FC } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

interface Transaction {
	id: string;
	image: string;
	name: string;
	price: number;
	quantity: number;
}

const calculateAmounts = (
	transactions: Transaction[]
): {
	shippingTax: number;
	subtotal: number;
	total: number;
} => {
	const shippingTax = 12;
	const subtotal = transactions.reduce((acc, transaction) => {
		return acc + transaction.price * transaction.quantity;
	}, 0);
	const total = shippingTax + subtotal;

	return {
		shippingTax,
		subtotal,
		total,
	};
};

interface CheckoutLoanSummaryProps {
	onQuantityChange?: (event: SelectChangeEvent<number>, transactionId: string) => void;
	transactions?: Transaction[];
}

export const CheckoutSummary: FC<CheckoutLoanSummaryProps> = (props) => {
	const { onQuantityChange, transactions = [], ...other } = props;
	const { shippingTax, subtotal, total } = calculateAmounts(transactions);

	const formattedShippingTax = numeral(shippingTax).format('$00.00');
	const formattedSubtotal = numeral(subtotal).format('$00.00');
	const formattedTotal = numeral(total).format('$00.00');

	return (
		<Card
			variant="outlined"
			sx={{ p: 3 }}
			{...other}
		>
			<Typography variant="h6">Loan Summary</Typography>
			<List sx={{ mt: 2 }}>
				{transactions.map((transaction) => {
					const price = numeral(transaction.price).format('$00.00');

					return (
						<ListItem
							disableGutters
							key={transaction.id}
						>
							<ListItemAvatar sx={{ pr: 2 }}>
								<Box
									sx={{
										alignItems: 'center',
										display: 'flex',
										height: 100,
										justifyContent: 'center',
										overflow: 'hidden',
										width: 100,
										'& img': {
											width: '100%',
											height: 'auto',
										},
									}}
								>
									<img
										alt={transaction.name}
										src={transaction.image}
									/>
								</Box>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Typography
										sx={{
											fontWeight: 'fontWeightBold',
										}}
										variant="subtitle2"
									>
										{transaction.name}
									</Typography>
								}
								secondary={
									<Typography
										color="text.secondary"
										sx={{ mt: 1 }}
										variant="body1"
									>
										{price}
									</Typography>
								}
							/>
							<ListItemSecondaryAction>
								<FormControl
									size="small"
									variant="outlined"
								>
									<Select
										value={transaction.quantity}
										onChange={(event) => onQuantityChange?.(event, transaction.id)}
									>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
										<MenuItem value={3}>3</MenuItem>
									</Select>
								</FormControl>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
			<OutlinedInput
				fullWidth
				placeholder="Discount Code"
				size="small"
				sx={{ mt: 2 }}
			/>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					mt: 2,
				}}
			>
				<Button type="button">Apply Coupon</Button>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					mt: 2,
				}}
			>
				<Typography variant="subtitle2">Subtotal</Typography>
				<Typography variant="subtitle2">{formattedSubtotal}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					mt: 2,
				}}
			>
				<Typography variant="subtitle2">Shipping Tax</Typography>
				<Typography variant="subtitle2">{formattedShippingTax}</Typography>
			</Box>
			<Divider sx={{ my: 2 }} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant="subtitle2">Total</Typography>
				<Typography variant="subtitle2">{formattedTotal}</Typography>
			</Box>
		</Card>
	);
};

CheckoutSummary.propTypes = {
	onQuantityChange: PropTypes.func,
	transactions: PropTypes.array,
};
