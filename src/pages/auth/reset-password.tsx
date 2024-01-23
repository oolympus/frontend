import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { paths } from 'src/paths';
import { FormControl, FormHelperText } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';
import React from 'react';
import useRequest from 'src/hooks/use-request';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

interface Values {
	username: string;
	otp: string;
	password: string;
	password_confirm: string;
}

const initialValues: Values = {
	username: '',
	otp: '',
	password: '',
	password_confirm: '',
};

const validationSchema = Yup.object({
	username: Yup.string().email().required('Required'),
	otp: Yup.number().required('Required'),
	password: Yup.string().min(7, 'Must be at least 7 characters').max(255).required('Required'),
	password_confirm: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords must match')
		.required('Passwords required and must match'),
});

const Page = () => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (): void => {},
	});

	const [codeSent, setCodeSent] = React.useState(false);

	const request = useRequest();
	const navigate = useNavigate();

	const handlePasswordReset = React.useCallback(async () => {
		const response = await request.post('/password-reset', {
			username: formik.values.username,
			otp: parseInt(formik.values.otp),
			password: formik.values.password,
			password_confirm: formik.values.password_confirm,
		});

		if (response.data.status !== 200) {
			toast.error(response.data?.message);
		} else {
			toast.success(response.data?.message);
			navigate(paths.dashboard.index);
		}
	}, [
		formik.values.otp,
		formik.values.password,
		formik.values.password_confirm,
		formik.values.username,
		navigate,
		request,
	]);

	const requestOTP = React.useCallback(async () => {
		const response = await request.post('/request-otp', {
			username: formik.values.username,
		});

		if (response.data.status !== 200) {
			toast.error(response.data?.message);
		} else {
			toast.success(response.data?.message);
			setCodeSent(true);
		}
	}, [formik.values.username, request]);

	return (
		<>
			<Seo title="Reset Password" />
			<div>
				<Box sx={{ mb: 4 }}>
					<Link
						color="text.primary"
						component={RouterLink}
						href={paths.auth.login}
						sx={{
							alignItems: 'center',
							display: 'inline-flex',
						}}
						underline="hover"
					>
						<SvgIcon sx={{ mr: 1 }}>
							<ArrowLeftIcon />
						</SvgIcon>
						<Typography variant="subtitle2">Dashboard</Typography>
					</Link>
				</Box>
				<Stack
					sx={{ mb: 4 }}
					spacing={1}
				>
					<Typography variant="h5">Reset password</Typography>
				</Stack>
				<form
					noValidate
					onSubmit={formik.handleSubmit}
				>
					<Stack spacing={3}>
						<FormControl error={!!(formik.touched.otp && formik.errors.otp)}>
							<MuiOtpInput
								length={6}
								onBlur={() => formik.handleBlur('otp')}
								onChange={(value) => formik.setFieldValue('otp', value)}
								onFocus={() => formik.setFieldTouched('otp')}
								sx={{
									'& .MuiFilledInput-input': {
										p: '14px',
									},
								}}
								value={formik.values.otp}
							/>
							{!!(formik.touched.otp && formik.errors.otp) && (
								<FormHelperText>{formik.errors.otp}</FormHelperText>
							)}
						</FormControl>

						<Button
							fullWidth
							size="small"
							sx={{ mt: 3 }}
							onClick={() => requestOTP()}
							variant="text"
						>
							Resend Code
						</Button>

						{codeSent ? (
							<>
								<TextField
									error={!!(formik.touched.username && formik.errors.username)}
									fullWidth
									helperText={formik.touched.username && formik.errors.username}
									label="Email"
									name="username"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="username"
									value={formik.values.username}
								/>
								<TextField
									error={!!(formik.touched.password && formik.errors.password)}
									fullWidth
									helperText={formik.touched.password && formik.errors.password}
									label="Password"
									name="password"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="password"
									value={formik.values.password}
								/>
								<TextField
									error={!!(formik.touched.password_confirm && formik.errors.password_confirm)}
									fullWidth
									helperText={formik.touched.password_confirm && formik.errors.password_confirm}
									label="Password (Confirm)"
									name="password_confirm"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="password"
									value={formik.values.password_confirm}
								/>
								<Button
									fullWidth
									size="large"
									sx={{ mt: 3 }}
									onClick={() => handlePasswordReset()}
									variant="contained"
								>
									Reset
								</Button>
							</>
						) : null}
					</Stack>
				</form>
			</div>
		</>
	);
};

export default Page;
