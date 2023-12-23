import type { FC } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import { Customer } from 'src/types/customer';

type CustomerBasicDetailsProps = Customer

export const CustomerBasicDetails: FC<CustomerBasicDetailsProps> = ( props ) => {
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
					value={added_by}
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
					value={other.financial_information}
				/>
				<PropertyListItem
					divider
					label="DOB"
					value={other.date_of_birth}
				/>
				<PropertyListItem
					divider
					label="Date Joined"
					value={other.date_joined}
				/>
				<PropertyListItem
					divider
					label="Gender"
					value={other.gender}
				/>
				<PropertyListItem
					divider
					label="Guarantor primary"
					value={other.guarantors[0]}
				/>
				<PropertyListItem
					divider
					label="Guarantor secondary"
					value={other.guarantors[1]}
				/>
			</PropertyList>
		</Card>
	);
};

CustomerBasicDetails.propTypes = {
	address: PropTypes.string,
	email: PropTypes.string.isRequired,
	is_active: PropTypes.bool.isRequired,
	telephone: PropTypes.string.isRequired,
	first_name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
}
