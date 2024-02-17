import type { FC } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import { CustomerDetailsProps } from './customer-basic-details';

export const CustomerBasicDetails: FC<CustomerDetailsProps> = (props) => {
	const { address, first_name, surname, email, telephone, added_by, is_active, ...other } = props;

	return (
		<Card {...other}>
			<CardHeader title="Basic Details" />
			<PropertyList>
				<PropertyListItem
					divider
					label="Email"
					value={email}
				/>
				<PropertyListItem
					divider
					label="First Name"
					value={first_name}
				/>
				<PropertyListItem
					divider
					label="Added by"
					value={added_by || 'N/A'}
				/>
				<PropertyListItem
					divider
					label="Phone"
					value={telephone}
				/>
				<PropertyListItem
					divider
					label="City"
					value={address}
				/>
				<PropertyListItem
					divider
					label="Financial Information"
					value={props.financial_information || 'N/A'}
				/>
				<PropertyListItem
					divider
					label="DOB"
					value={props.date_of_birth || 'N/A'}
				/>
				<PropertyListItem
					divider
					label="User Status"
					value={props.is_active ? 'activated' : 'activated'}
				/>
			</PropertyList>
		</Card>
	);
};
