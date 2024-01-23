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
import { useSearchParams } from 'src/hooks/use-search-params';
import { paths } from 'src/paths';
import useRequest from 'src/hooks/use-request';
import toast from 'react-hot-toast';

const STORAGE_KEY = 'accessToken';

interface Values {
	username: string;
	password: string;
	submit: null;
}

const initialValues: Values = {
	username: 'demo@olympus.com',
	password: 'Password123!',
	submit: null,
};

const validationSchema = Yup.object({
	username: Yup.string().max(255).required('Username is required'),
	password: Yup.string()
		.min(3, 'Password must be at least 3 characters')
		.max(255)
		.required('Password is required'),
});

const Page = () => {
	const isMounted = useMounted();
	const router = useRouter();
	const searchParams = useSearchParams();
	const returnTo = searchParams.get('returnTo');
	const request = useRequest();

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values, helpers): Promise<void> => {
			try {
				const response = await request.post('/login', { ...values });

				if (!response.data?.token) {
					return;
				}
				if (response.data?.status !== 200) {
					toast.error(response.data?.message);
				} else {
					toast.success(response.data?.message);
				}

				window.localStorage.setItem(STORAGE_KEY, response.data.token);

				if (isMounted()) {
					router.push(returnTo || paths.dashboard.index);
				}
			} catch (err) {
				console.error(err);

				if (isMounted()) {
					helpers.setStatus({ success: false });
					helpers.setErrors({ submit: err.message });
					helpers.setSubmitting(false);
				}
			}
		},
	});

	usePageView();

	return (
		<>
			<Seo title="Login" />
			<div>
				<Card elevation={16}>
					<CardHeader
						subheader={
							<Typography
								color="text.secondary"
								variant="body2"
							>
								Don&apos;t have an account? &nbsp;
								<Link
									component={RouterLink}
									href={paths.auth.register}
									underline="hover"
									variant="subtitle2"
								>
									Register
								</Link>
							</Typography>
						}
						sx={{ pb: 0 }}
						title="Log in"
					/>
					<CardContent>
						<form
							noValidate
							onSubmit={formik.handleSubmit}
						>
							<Stack spacing={3}>
								<TextField
									autoFocus
									error={!!(formik.touched.username && formik.errors.username)}
									fullWidth
									helperText={formik.touched.username && formik.errors.username}
									label="Username"
									name="username"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="text"
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
							</Stack>
							{formik.errors.submit && (
								<FormHelperText
									error
									sx={{ mt: 3 }}
								>
									{formik.errors.submit as string}
								</FormHelperText>
							)}
							<Stack sx={{ mt: 2 }}>
								<Link
									component={RouterLink}
									href={paths.auth.forgotPassword}
									underline="hover"
									variant="subtitle2"
								>
									Forgot Password
								</Link>
							</Stack>
							<Button
								disabled={formik.isSubmitting}
								fullWidth
								size="large"
								sx={{ mt: 2 }}
								type="submit"
								variant="contained"
							>
								Log In
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default Page;
