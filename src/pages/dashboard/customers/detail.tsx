import { useCallback, useEffect, useState } from 'react';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import { CustomerBasicDetails } from 'src/sections/dashboard/customer/CustomerBasicDetails';
import { CustomerDataManagement } from 'src/sections/dashboard/customer/customer-data-management';
import { CustomerPayment } from 'src/sections/dashboard/customer/customer-payment';
import type { Customer } from 'src/types/customer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useCustomer = (customerId: string): Customer | null => {
	const isMounted = useMounted();
	const [customer, setCustomer] = useState<Customer | null>(null);

	const handleCustomerGet = useCallback(async () => {
		try {
			axios.get(import.meta.env.VITE_APP_BASE_URL + '/users/' + customerId).then((res) => {
				if (isMounted()) {
					setCustomer(res.data?.data);
				}
			});
		} catch (err) {
			console.error(err);
		}
	}, [customerId, isMounted]);

	useEffect(
		() => {
			handleCustomerGet();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return customer;
};

const Page = () => {
	const [currentTab, setCurrentTab] = useState<string>('details');
	const params = useParams();

	const customerId = params.customerId;

	const customer = useCustomer(customerId!);

	usePageView();

	if (!customer) {
		return null;
	}

	return (
		<>
			<Seo title="Dashboard: Customer Details" />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Stack spacing={4}>
						<Stack spacing={4}>
							<div>
								<Link
									color="text.primary"
									component={RouterLink}
									href={paths.dashboard.customers.index}
									sx={{
										alignItems: 'center',
										display: 'inline-flex',
									}}
									underline="hover"
								>
									<SvgIcon sx={{ mr: 1 }}>
										<ArrowLeftIcon />
									</SvgIcon>
									<Typography variant="subtitle2">Customers</Typography>
								</Link>
							</div>
							<Stack
								alignItems="flex-start"
								direction={{
									xs: 'column',
									md: 'row',
								}}
								justifyContent="space-between"
								spacing={4}
							>
								<Stack
									alignItems="center"
									direction="row"
									spacing={2}
								>
									<Stack spacing={1}>
										<Typography variant="h4">{customer.email}</Typography>
										<Stack
											alignItems="center"
											direction="row"
											spacing={1}
										>
											<Typography variant="subtitle2">user_id:</Typography>
											<Chip
												label={customer.id}
												size="small"
											/>
										</Stack>
									</Stack>
								</Stack>
								<Stack
									alignItems="center"
									direction="row"
									spacing={2}
								>
									<Button
										color="inherit"
										component={RouterLink}
										endIcon={
											<SvgIcon>
												<Edit02Icon />
											</SvgIcon>
										}
										href={`/customers/${customerId}/edit`}
									>
										Edit
									</Button>
								</Stack>
							</Stack>
							<Divider />
						</Stack>
						<div>
							<Grid
								container
								spacing={4}
							>
								<Grid
									xs={12}
									lg={4}
								>
									<CustomerBasicDetails {...customer} />
								</Grid>
								<Grid
									xs={12}
									lg={8}
								>
									<Stack spacing={4}>
										<CustomerPayment {...customer} />
										<CustomerDataManagement {...customer} />
									</Stack>
								</Grid>
							</Grid>
						</div>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Page;
