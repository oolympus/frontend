import type { FC } from 'react';
import Camera01Icon from '@untitled-ui/icons-react/build/esm/Camera01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import { alpha } from '@mui/system/colorManipulator';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AccountDetailsSettings } from 'src/sections/dashboard/account/account-billing-settings';
import { Customer } from 'src/types/customer';
import { Loan } from 'src/types/loan';

interface AccountGeneralSettingsProps {
	user: Customer;
	loans: Loan[];
}

export const AccountGeneralSettings: FC<AccountGeneralSettingsProps> = (props) => {
	const { user, loans } = props;
	const [emailDisabled, setEmailDisabled] = React.useState(true);
	const [nameDisabled, setNameDisabled] = React.useState(true);

	const editEmailBtn = emailDisabled ? (
		<Button
			color="inherit"
			size="small"
			onClick={() => setEmailDisabled(false)}
		>
			Edit
		</Button>
	) : (
		<Button
			color="inherit"
			size="small"
			onClick={() => setEmailDisabled(true)}
		>
			Save
		</Button>
	);

	const editNameBtn = nameDisabled ? (
		<Button
			color="inherit"
			size="small"
			onClick={() => setNameDisabled(false)}
		>
			Edit
		</Button>
	) : (
		<Button
			color="inherit"
			size="small"
			onClick={() => setNameDisabled(true)}
		>
			Save
		</Button>
	);

	const fullname = user.first_name + ' ' + user.surname;

	return (
		<Stack
			spacing={4}
			{...props}
		>
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
							<Typography variant="h6">Basic details</Typography>
						</Grid>
						<Grid
							xs={12}
							md={8}
						>
							<Stack spacing={3}>
								<Stack
									alignItems="center"
									direction="row"
									spacing={2}
								>
									<Box
										sx={{
											borderColor: 'neutral.300',
											borderRadius: '50%',
											borderStyle: 'dashed',
											borderWidth: 1,
											p: '4px',
										}}
									>
										<Box
											sx={{
												borderRadius: '50%',
												height: '100%',
												width: '100%',
												position: 'relative',
											}}
										>
											<Box
												sx={{
													alignItems: 'center',
													backgroundColor: (theme) => alpha(theme.palette.neutral[700], 0.5),
													borderRadius: '50%',
													color: 'common.white',
													cursor: 'pointer',
													display: 'flex',
													height: '100%',
													justifyContent: 'center',
													left: 0,
													opacity: 0,
													position: 'absolute',
													top: 0,
													width: '100%',
													zIndex: 1,
													'&:hover': {
														opacity: 1,
													},
												}}
											>
												<Stack
													alignItems="center"
													direction="row"
													spacing={1}
												>
													<SvgIcon color="inherit">
														<Camera01Icon />
													</SvgIcon>
													<Typography
														color="inherit"
														variant="subtitle2"
														sx={{
															fontWeight: 700,
														}}
													>
														Select
													</Typography>
												</Stack>
											</Box>
											<Avatar
												src={''}
												sx={{
													height: 100,
													width: 100,
												}}
											>
												<SvgIcon>
													<User01Icon />
												</SvgIcon>
											</Avatar>
										</Box>
									</Box>
									<Box>
										<Button
											color="inherit"
											size="small"
										>
											{user.email}
										</Button>
										<Button
											color="inherit"
											size="small"
										>
											{fullname}
										</Button>
									</Box>
								</Stack>
								<Stack
									alignItems="center"
									direction="row"
									spacing={2}
								>
									<TextField
										defaultValue={fullname}
										label="Full Name"
										sx={{ flexGrow: 1 }}
									/>
									{editNameBtn}
								</Stack>
								<Stack
									alignItems="center"
									direction="row"
									spacing={2}
								>
									<TextField
										defaultValue={user.email}
										disabled={emailDisabled}
										label="Email Address"
										required
										sx={{
											flexGrow: 1,
											'& .MuiOutlinedInput-notchedOutline': {
												borderStyle: 'dashed',
											},
										}}
									/>
									{editEmailBtn}
								</Stack>
							</Stack>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<AccountDetailsSettings
				user={user}
				loans={loans.slice(0, 3)}
			/>
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
							<Typography variant="h6">Deactivate Account</Typography>
						</Grid>
						<Grid
							xs={12}
							md={8}
						>
							<Stack
								alignItems="flex-start"
								spacing={3}
							>
								<Typography variant="subtitle1">
									Deactivate your account and all of your source data.
								</Typography>
								<Button
									color="error"
									variant="outlined"
								>
									Deactivate account
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Stack>
	);
};
