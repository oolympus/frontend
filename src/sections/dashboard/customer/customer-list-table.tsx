import type { ChangeEvent, FC, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { Scrollbar } from 'src/components/scrollbar';
import { paths } from 'src/paths';
import type { Customer } from 'src/types/customer';

interface CustomerListTableProps {
	count?: number;
	items?: Customer[];
	onDeselectAll?: () => void;
	onDeselectOne?: ( customerId: string ) => void;
	onPageChange?: ( event: MouseEvent<HTMLButtonElement> | null, newPage: number ) => void;
	onRowsPerPageChange?: ( event: ChangeEvent<HTMLInputElement> ) => void;
	onSelectAll?: () => void;
	onSelectOne?: ( customerId: string ) => void;
	page?: number;
	rowsPerPage?: number;
	selected?: string[];
}

export const CustomerListTable: FC<CustomerListTableProps> = ( props ) => {
	const {
		count = 0,
		items = [],
		onPageChange = () => { },
		onRowsPerPageChange,
		page = 0,
		rowsPerPage = 0,
		selected = [],
	} = props;

	return (
		<Box sx={{ position: 'relative' }}
			p={2} >
			<Scrollbar>
				<Table sx={{ minWidth: 700 }}>
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>first_name</TableCell>
							<TableCell>surname</TableCell>
							<TableCell>address</TableCell>
							<TableCell>telephone</TableCell>
							<TableCell>gender</TableCell>
							<TableCell>guarantors</TableCell>
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map( ( customer ) => {
							const isSelected = selected.includes( customer.id );
							return (
								<TableRow
									hover
									key={customer.id}
									selected={isSelected}
								>
									<TableCell padding="checkbox">
										{customer.id}
									</TableCell>
									<TableCell>
										<Stack
											alignItems="center"
											direction="row"
											spacing={1}
										>
											<div>
												<Link
													color="inherit"
													component={RouterLink}
													href={paths.dashboard.customers.details}
													variant="subtitle2"
												>
													{customer.first_name}
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
									<TableCell>{customer.surname}</TableCell>
									<TableCell>{customer.address}</TableCell>
									<TableCell>{customer.telephone}</TableCell>
									<TableCell>{customer.gender}</TableCell>
									<TableCell>
										<Stack
											alignItems="center"
											direction="column"
											spacing={1}
										>
											<div>
												<Link
													color="inherit"
													component={RouterLink}
													href={paths.dashboard.customers.details}
													variant="subtitle2"
												>
													{customer.guarantors[0]}
												</Link>
												<Typography
													color="text.secondary"
													variant="body2"
												>
													{customer.guarantors[1]}
												</Typography>
											</div>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<IconButton
											component={RouterLink}
											href={paths.dashboard.customers.edit}
										>
											<SvgIcon>
												<Edit02Icon />
											</SvgIcon>
										</IconButton>
										<IconButton
											component={RouterLink}
											href={paths.dashboard.customers.details}
										>
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
				count={count}
				onPageChange={onPageChange}
				onRowsPerPageChange={onRowsPerPageChange}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[5, 10, 25]}
			/>
		</Box>
	);
};

CustomerListTable.propTypes = {
	count: PropTypes.number,
	items: PropTypes.array,
	onDeselectAll: PropTypes.func,
	onDeselectOne: PropTypes.func,
	onPageChange: PropTypes.func,
	onRowsPerPageChange: PropTypes.func,
	onSelectAll: PropTypes.func,
	onSelectOne: PropTypes.func,
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
	selected: PropTypes.array,
};
