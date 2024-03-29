import type { FC } from 'react';
import numeral from 'numeral';
import { subDays, subHours } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';

const now = new Date();

interface Customer {
	id: string;
	avatar: string;
	city: string;
	country: string;
	currency: string;
	email: string;
	isProspect: boolean;
	isReturning: boolean;
	name: string;
	state: string;
	totalSpent: number;
	totalLoans: number;
	updatedAt: number;
}

const customers: Customer[] = [
	{
		id: '5e887ac47eed253091be10cb',
		avatar: '/assets/avatars/avatar-carson-darrin.png',
		city: 'Cleveland',
		country: 'USA',
		currency: '$',
		email: 'carson.darrin@olympus.com',
		isProspect: false,
		isReturning: true,
		name: 'Carson Darrin',
		state: 'Ohio',
		totalSpent: 300.0,
		totalLoans: 3,
		updatedAt: subDays( subHours( now, 7 ), 1 ).getTime(),
	},
	{
		id: '5e887b209c28ac3dd97f6db5',
		avatar: '/assets/avatars/avatar-fran-perez.png',
		city: 'Atlanta',
		country: 'USA',
		currency: '$',
		email: 'fran.perez@olympus.com',
		isProspect: true,
		isReturning: false,
		name: 'Fran Perez',
		state: 'Georgia',
		totalSpent: 0.0,
		totalLoans: 0,
		updatedAt: subDays( subHours( now, 1 ), 2 ).getTime(),
	},
	{
		id: '5e887b7602bdbc4dbb234b27',
		avatar: '/assets/avatars/avatar-jie-yan-song.png',
		city: 'North Canton',
		country: 'USA',
		currency: '$',
		email: 'jie.yan.song@olympus.com',
		isProspect: false,
		isReturning: false,
		name: 'Jie Yan Song',
		state: 'Ohio',
		totalSpent: 5600.0,
		totalLoans: 6,
		updatedAt: subDays( subHours( now, 4 ), 2 ).getTime(),
	},
	{
		id: '5e86809283e28b96d2d38537',
		avatar: '/assets/avatars/avatar-anika-visser.png',
		city: 'Madrid',
		country: 'Spain',
		currency: '$',
		email: 'anika.visser@olympus.com',
		isProspect: false,
		isReturning: true,
		name: 'Anika Visser',
		state: 'Madrid',
		totalSpent: 500.0,
		totalLoans: 1,
		updatedAt: subDays( subHours( now, 11 ), 2 ).getTime(),
	},
	{
		id: '5e86805e2bafd54f66cc95c3',
		avatar: '/assets/avatars/avatar-miron-vitold.png',
		city: 'San Diego',
		country: 'USA',
		currency: '$',
		email: 'miron.vitold@olympus.com',
		isProspect: true,
		isReturning: false,
		name: 'Miron Vitold',
		totalSpent: 0.0,
		totalLoans: 0,
		state: 'California',
		updatedAt: subDays( subHours( now, 7 ), 3 ).getTime(),
	},
];

const tabs = [
	{
		label: 'All',
		value: 'all',
	},
	{
		label: 'Prospect',
		value: 'isProspect',
	},
	{
		label: 'Returning',
		value: 'isReturning',
	},
];

interface Option {
	label: string;
	value: string;
}

const sortOptions: Option[] = [
	{
		label: 'Last update (newest)',
		value: 'updatedAt|desc',
	},
	{
		label: 'Last update (oldest)',
		value: 'updatedAt|asc',
	},
	{
		label: 'Total loans (highest)',
		value: 'loans|desc',
	},
	{
		label: 'Total loans (lowest)',
		value: 'loans|asc',
	},
];

export const Table3: FC = () => (
	<Box
		sx={{
			backgroundColor: ( theme ) => ( theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100' ),
			p: 3,
		}}
	>
		<Card>
			<Tabs
				indicatorColor="primary"
				scrollButtons="auto"
				textColor="primary"
				value="all"
				sx={{ px: 3 }}
				variant="scrollable"
			>
				{tabs.map( ( tab ) => (
					<Tab
						key={tab.value}
						label={tab.label}
						value={tab.value}
					/>
				) )}
			</Tabs>
			<Divider />
			<Stack
				alignItems="center"
				direction="row"
				flexWrap="wrap"
				gap={2}
				sx={{ p: 3 }}
			>
				<OutlinedInput
					placeholder="Search customers"
					startAdornment={
						<InputAdornment position="start">
							<SvgIcon>
								<SearchMdIcon />
							</SvgIcon>
						</InputAdornment>
					}
					sx={{ flexGrow: 1 }}
				/>
				<TextField
					label="Sort By"
					name="sort"
					select
					SelectProps={{ native: true }}
				>
					{sortOptions.map( ( option ) => (
						<option
							key={option.value}
							value={option.value}
						>
							{option.label}
						</option>
					) )}
				</TextField>
			</Stack>
			<Scrollbar>
				<Table sx={{ minWidth: 700 }}>
					<TableHead>
						<TableRow>
							<TableCell padding="checkbox">
								<Checkbox />
							</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Location</TableCell>
							<TableCell>Loans</TableCell>
							<TableCell>Spent</TableCell>
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{customers.map( ( customer ) => {
							const location = `${customer.city}, ${customer.state}, ${customer.country}`;
							const totalSpent = numeral( customer.totalSpent ).format( `${customer.currency}0,0.00` );

							return (
								<TableRow
									hover
									key={customer.id}
								>
									<TableCell padding="checkbox">
										<Checkbox />
									</TableCell>
									<TableCell>
										<Stack
											alignItems="center"
											direction="row"
											spacing={1}
										>
											<Avatar
												src={customer.avatar}
												sx={{
													height: 42,
													width: 42,
												}}
											/>
											<div>
												<Link
													color="inherit"
													variant="subtitle2"
												>
													{customer.name}
												</Link>
												<Typography
													color="text.secondary"
													variant="body2"
												>
													{customer.email}
												</Typography>
											</div>
										</Stack>
									</TableCell>
									<TableCell>{location}</TableCell>
									<TableCell>{customer.totalLoans}</TableCell>
									<TableCell>{totalSpent}</TableCell>
									<TableCell align="right">
										<IconButton>
											<SvgIcon>
												<Edit02Icon />
											</SvgIcon>
										</IconButton>
										<IconButton>
											<SvgIcon>
												<ArrowRightIcon />
											</SvgIcon>
										</IconButton>
									</TableCell>
								</TableRow>
							);
						} )}
					</TableBody>
				</Table>
			</Scrollbar>
			<TablePagination
				component="div"
				count={customers.length}
				onPageChange={() => { }}
				onRowsPerPageChange={() => { }}
				page={0}
				rowsPerPage={5}
				rowsPerPageOptions={[5, 10, 25]}
			/>
		</Card>
	</Box>
);
