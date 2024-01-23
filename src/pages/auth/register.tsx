import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { useRouter } from 'src/hooks/use-router';
import { paths } from 'src/paths';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import useRequest from 'src/hooks/use-request';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const STORAGE_KEY = 'accessToken';

type Values = {
	email: string;
	first_name: string;
	surname: string;
	gender: 'male' | 'female';
	address: string;
	telephone: string;
};

const initialValues: Values = {
	email: '',
	first_name: '',
	surname: '',
	gender: 'male',
	address: '',
	telephone: '',
};

const validationSchema = Yup.object({
	email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
	first_name: Yup.string().max(255).required('First Name is required'),
	phone: Yup.string()
		.matches(/^256(78|77|76)\d{7}$/, 'Must be a valid Ugandan phone number')
		.required('Phone is required'),
	surname: Yup.string().max(255).required('Surname is required'),
	address: Yup.string().min(2, 'Address is required'),
	gender: Yup.string().oneOf(['male', 'female']).required('Gender is required'),
});

const Page = () => {
	const isMounted = useMounted();
	const router = useRouter();
	const request = useRequest();

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values, helpers): Promise<void> => {
			try {
				const response = await request.post('/register', { ...values });

				console.log(values);

				if (!response.data?.token) {
					return;
				}

				window.sessionStorage.setItem(STORAGE_KEY, response.data.token);

				if (isMounted()) {
					router.push(paths.dashboard.index);
				}
			} catch (err) {
				console.error(err);

				if (isMounted()) {
					helpers.setStatus({ success: false });
					helpers.setSubmitting(false);
				}
			}
		},
	});

	const navigate = useNavigate();

	const requestOTP = React.useCallback(async () => {
		const response = await request.post('/request-otp', {
			username: formik.values.email,
		});

		if (response.data.status !== 200) {
			toast.error(response.data?.message);
		} else {
			toast.success(response.data?.message);

			setTimeout(() => {
				navigate(paths.auth.verifyCode);
			}, 2000);
		}
	}, [formik.values.email, navigate, request]);

	const handleSubmit = React.useCallback(async () => {
		const response = await request.post('/signup', { ...formik.values });
		toast.error(response.data?.message);
		requestOTP();
	}, [formik.values, request, requestOTP]);

	usePageView();

	return (
		<>
			<Seo title="Register" />
			<div>
				<Card elevation={16}>
					<CardHeader
						subheader={
							<Typography
								color="text.secondary"
								variant="body2"
							>
								Already have an account? &nbsp;
								<Link
									component={RouterLink}
									href={paths.auth.login}
									underline="hover"
									variant="subtitle2"
								>
									Log in
								</Link>
							</Typography>
						}
						sx={{ pb: 0 }}
						title="Register"
					/>
					<CardContent>
						<form>
							<Stack spacing={3}>
								<TextField
									error={!!(formik.touched.first_name && formik.errors.first_name)}
									fullWidth
									helperText={formik.touched.first_name && formik.errors.first_name}
									label="First Name"
									name="first_name"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									value={formik.values.first_name}
								/>
								<TextField
									error={!!(formik.touched.surname && formik.errors.surname)}
									fullWidth
									helperText={formik.touched.surname && formik.errors.surname}
									label="Surname"
									name="surname"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									value={formik.values.surname}
								/>
								<TextField
									error={!!(formik.touched.email && formik.errors.email)}
									fullWidth
									helperText={formik.touched.email && formik.errors.email}
									label="Email"
									name="email"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="email"
									value={formik.values.email}
								/>
								<TextField
									error={!!(formik.touched.telephone && formik.errors.telephone)}
									fullWidth
									helperText={formik.touched.telephone && formik.errors.telephone}
									label="Phone"
									name="telephone"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="tel"
									value={formik.values.telephone}
								/>
								<TextField
									error={!!(formik.touched.address && formik.errors.address)}
									fullWidth
									helperText={formik.touched.address && formik.errors.address}
									label="Address"
									name="address"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="text"
									value={formik.values.address}
								/>
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
							</Stack>
							{!!(formik.touched.gender && formik.errors.gender) && (
								<FormHelperText error>{formik.errors.gender}</FormHelperText>
							)}
							{formik.errors.address && (
								<FormHelperText
									error
									sx={{ mt: 3 }}
								>
									{formik.errors.address as string}
								</FormHelperText>
							)}
							<Button
								// disabled={formik.isSubmitting}
								fullWidth
								size="large"
								sx={{ mt: 2 }}
								// type="submit"
								variant="contained"
								onClick={() => handleSubmit()}
							>
								Register
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default Page;
