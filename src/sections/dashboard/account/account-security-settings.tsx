import type { FC } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';

interface LoginEvent {
	id: string;
	createdAt: number;
	ip: string;
	type: string;
	userAgent: string;
}

interface AccountSecuritySettingsProps {
	loginEvents: LoginEvent[];
}

export const AccountSecuritySettings: FC<AccountSecuritySettingsProps> = (props) => {
	const { loginEvents } = props;

	return (
		<Stack spacing={4}>
			<Card>
				<CardContent>
					<Grid
						container
						spacing={3}
					>
						<Grid
							xs={12}
							md={4}
						>
							<Typography variant="h6">Change password</Typography>
						</Grid>
						<Grid
							xs={12}
							sm={12}
							md={8}
						>
							<Stack spacing={2}>
								<TextField
									label="Current Password"
									type="password"
									sx={{
										flexGrow: 1,
										...{
											'& .MuiOutlinedInput-notchedOutline': {
												borderStyle: 'dotted',
											},
										},
									}}
								/>

								<TextField
									label="New Password"
									type="password"
									sx={{
										flexGrow: 1,
										...{
											'& .MuiOutlinedInput-notchedOutline': {
												borderStyle: 'dotted',
											},
										},
									}}
								/>
								<Box>
									<Button variant="contained">Save</Button>
								</Box>
							</Stack>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<Card>
				<CardHeader
					title="Login history"
					subheader="Your recent login activity"
				/>
				<Scrollbar>
					<Table sx={{ minWidth: 500 }}>
						<TableHead>
							<TableRow>
								<TableCell>Login type</TableCell>
								<TableCell>IP Address</TableCell>
								<TableCell>Client</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{loginEvents.map((event) => {
								const createdAt = format(event.createdAt, 'HH:mm a MM/dd/yyyy');

								return (
									<TableRow
										key={event.id}
										sx={{
											'&:last-child td, &:last-child th': {
												border: 0,
											},
										}}
									>
										<TableCell>
											<Typography variant="subtitle2">{event.type}</Typography>
											<Typography
												variant="body2"
												color="body2"
											>
												on {createdAt}
											</Typography>
										</TableCell>
										<TableCell>{event.ip}</TableCell>
										<TableCell>{event.userAgent}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Scrollbar>
			</Card>
		</Stack>
	);
};

AccountSecuritySettings.propTypes = {
	loginEvents: PropTypes.array.isRequired,
};
