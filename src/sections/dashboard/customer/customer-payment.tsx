import type { FC } from 'react';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import { CustomerDetailsProps } from 'src/sections/dashboard/customer/customer-basic-details';

export const CustomerPayment: FC<CustomerDetailsProps> = (props) => {
	const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

	const align = mdUp ? 'horizontal' : 'vertical';

	return (
		<Card {...props}>
			<PropertyList>
				<PropertyListItem
					divider
					label="Customer ID"
					value={props.id}
				/>
				<PropertyListItem
					divider
					label="Date Joined"
					value={new Date(props.date_joined).toLocaleDateString()}
				/>
				<PropertyListItem
					divider
					label="Gender"
					value={props.gender}
				/>
				<PropertyListItem
					divider
					label="Guarantor primary"
					value={(props.guarantors && props?.guarantors[0]) || 'None'}
				/>
				<PropertyListItem
					divider
					label="Guarantor secondary"
					value={(props.guarantors && props?.guarantors[1]) || 'None'}
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
