import type { FC } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';

import { Customer } from 'src/types/customer';
import {
	Card,
	CardContent,
	CardHeader,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { useFormik } from 'formik';
import { useMounted } from 'src/hooks/use-mounted';

interface Values {
	principal: number;
	payment_interval: 'weekly' | 'monthly';
	submit: null;
}

const initialValues: Values = {
	principal: 55000,
	payment_interval: 'weekly',
	submit: null,
};

const validationSchema = Yup.object({
	principal: Yup.string().max(255).required('Principal is required'),
	payment_interval: Yup.string()
		.oneOf(['weekly', 'monthly'])
		.required('Payment interval is required'),
});

interface LoanApplicationProps {
	onCancel: () => void;
	onApply: () => void;
	customer: Customer;
}

export const LoanApplication: FC<LoanApplicationProps> = (props) => {
	const { onCancel, onApply, customer } = props;
	const isMounted = useMounted();

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values, helpers): Promise<void> => {
			try {
				console.log(values);
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

	return (
		<Stack
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Card
				elevation={16}
				sx={{
					width: '40%',
				}}
			>
				<CardHeader
					sx={{ pb: 0 }}
					title="Loan Application"
				/>
				<CardContent>
					<form
						noValidate
						onSubmit={formik.handleSubmit}
					>
						<Stack spacing={2}>
							<TextField
								autoFocus
								error={!!(formik.touched.principal && formik.errors.principal)}
								fullWidth
								helperText={formik.touched.principal && formik.errors.principal}
								label="Principal"
								name="principal"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								type="text"
								value={formik.values.principal}
							/>
							<FormControl sx={{ m: 1, minWidth: 120 }}>
								<InputLabel id="payment_interval">Payment Interval</InputLabel>
								<Select
									labelId="payment_interval"
									name="payment_interval"
									id="payment_interval"
									value={formik.values.payment_interval}
									label="Payment Interval"
									onChange={formik.handleChange}
								>
									<MenuItem value={'weekly'}>Weekly</MenuItem>
									<MenuItem value={'monthy'}>Monthly</MenuItem>
								</Select>
							</FormControl>
						</Stack>
						{formik.errors.submit && (
							<FormHelperText
								error
								sx={{ mt: 3 }}
							>
								{formik.errors.submit as string}
							</FormHelperText>
						)}
						<Stack
							alignItems="center"
							direction="row"
							spacing={2}
							marginTop={3}
							justifyContent={'space-between'}
						>
							<Button
								color="primary"
								onClick={onApply}
								size="small"
								fullWidth
								variant="contained"
								type="submit"
							>
								Apply
							</Button>
							<Button
								color="error"
								onClick={onCancel}
								size="small"
								variant="outlined"
								fullWidth
							>
								Cancel
							</Button>
						</Stack>
					</form>
				</CardContent>
			</Card>
		</Stack>
	);
};

LoanApplication.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onApply: PropTypes.func.isRequired,
	customer: PropTypes.any.isRequired,
};
