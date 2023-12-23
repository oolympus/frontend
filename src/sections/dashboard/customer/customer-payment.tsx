import type { FC } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';

export const CustomerPayment: FC = (props) => {
	const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

	const align = mdUp ? 'horizontal' : 'vertical';

	return (
		<Card {...props}>
			<CardHeader title="Payment" />
			<PropertyList>
				<PropertyListItem
					align={align}
					divider
					label="Credit Card"
					value="**** **** **** **** 4142"
				/>
				<PropertyListItem
					align={align}
					divider
					label="Bank A/C"
					value="2038957863 - Centenary Bank"
				/>
				<PropertyListItem
					align={align}
					divider
					label="Loan Count"
					value="2"
				/>
				<PropertyListItem
					align={align}
					divider
					label="Paid"
					value="Loan-920874876673"
				/>
				<PropertyListItem
					align={align}
					divider
					label="State/Region"
					value={'Kampala, uganda'}
				/>
				<PropertyListItem
					align={align}
					divider
					label="Total Borrowed"
					value="UGX 88000"
				/>
			</PropertyList>
		</Card>
	);
};
