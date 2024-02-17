import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
import type { Customer } from 'src/types/customer';
import { wait } from 'src/utils/wait';
import { useParams } from 'react-router-dom';
import useRequest from 'src/hooks/use-request';
import { FC, useCallback, useEffect } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface CustomerEditFormProps {
	customer: Customer;
}

export const CustomerEditForm: FC<CustomerEditFormProps> = (props) => {
	const { customer, ...other } = props;
	const params = useParams();

	const request = useRequest();

	const handleGetCustomer = useCallback(async () => {
		const response = await request.get(`/users/${params?.customerId}`);
		// console.log('::::::::', response.data);
	}, [params?.customerId, request]);

	useEffect(() => {
		handleGetCustomer();
	}, [handleGetCustomer]);

	console.log('params:: ', params);

	const formik = useFormik({
		initialValues: {
			address: customer.address || '',
			email: customer.email || '',
			isActive: customer.is_active || false,
			firstName: customer.first_name || '',
			surname: customer.surname || '',
			telephone: customer.telephone || '',
			gender: customer.gender || '',
			submit: null,
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
			surname: Yup.string().max(255).required('surname is required'),
			telephone: Yup.string().max(15),
			first_name: Yup.string().max(255).required('First Name is required'),
			address: Yup.string().min(2, 'Address is required'),
			gender: Yup.string().oneOf(['male', 'female']).required('Gender is required'),
		}),
		onSubmit: async (values, helpers): Promise<void> => {
			try {
				// NOTE: Make API request
				await wait(500);
				helpers.setStatus({ success: true });
				helpers.setSubmitting(false);
				toast.success('Customer updated');
			} catch (err) {
				console.error(err);
				toast.error('Something went wrong!');
				helpers.setStatus({ success: false });
				helpers.setErrors({ submit: err.message });
				helpers.setSubmitting(false);
			}
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			{...other}
		>
			<Card>
				<CardHeader title="Edit Customer" />
				<CardContent sx={{ pt: 0 }}>
					<Grid
						container
						spacing={3}
					>
						<Grid
							xs={12}
							md={6}
						>
							<TextField
								error={!!(formik.touched.firstName && formik.errors.firstName)}
								fullWidth
								helperText={formik.touched.firstName && formik.errors.firstName}
								label="Full name"
								name="name"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								required
								value={formik.values.firstName}
							/>
						</Grid>
						<Grid
							xs={12}
							md={6}
						>
							<TextField
								error={!!(formik.touched.email && formik.errors.email)}
								fullWidth
								helperText={formik.touched.email && formik.errors.email}
								label="Email address"
								name="email"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								required
								value={formik.values.email}
							/>
						</Grid>
						<Grid
							md={6}
							xs={12}
						>
							<TextField
								error={!!(formik.touched.address && formik.errors.address)}
								fullWidth
								// helperText={formik.touched.address && formik.errors.address}
								label="Address"
								name="address"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.address}
							/>
						</Grid>
						<Grid
							xs={12}
							md={6}
						>
							<TextField
								error={!!(formik.touched.telephone && formik.errors.telephone)}
								fullWidth
								helperText={formik.touched.telephone && formik.errors.telephone}
								label="Phone number"
								name="phone"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.telephone}
							/>
						</Grid>
						<Grid>
							<FormControl>
								<FormLabel id="demo-row-radio-buttons-group-label">Select Gender</FormLabel>
								<RadioGroup
									row
									aria-labelledby="demo-row-radio-buttons-group-label"
									name="gender"
									defaultValue={'male'}
									value={formik.values.gender}
									onChange={formik.handleChange}
								>
									<FormControlLabel
										value="male"
										control={<Radio />}
										label="Male"
									/>
									<FormControlLabel
										value="female"
										control={<Radio />}
										label="Female"
									/>
								</RadioGroup>
							</FormControl>
						</Grid>
					</Grid>
				</CardContent>
				<Stack
					direction={{
						xs: 'column',
						sm: 'row',
					}}
					flexWrap="wrap"
					spacing={3}
					sx={{ p: 3 }}
				>
					<Button
						disabled={formik.isSubmitting}
						type="submit"
						variant="contained"
					>
						Update
					</Button>
					<Button
						color="error"
						variant="outlined"
						component={RouterLink}
						disabled={formik.isSubmitting}
						href={paths.dashboard.customers.details}
					>
						Cancel
					</Button>
				</Stack>
			</Card>
		</form>
	);
};

CustomerEditForm.propTypes = {
	// @ts-ignore
	customer: PropTypes.object.isRequired,
};
