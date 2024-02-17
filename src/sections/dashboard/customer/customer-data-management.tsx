import { useCallback, type FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { CustomerDetailsProps } from 'src/sections/dashboard/customer/customer-basic-details';
import useRequest from 'src/hooks/use-request';
import toast from 'react-hot-toast';

export const CustomerDataManagement: FC<CustomerDetailsProps> = (props) => {
	const r = useRequest();

	const handleDeactivate = useCallback(
		async (userId: string) => {
			try {
				const response = await r.put(`/users/${userId}/deactivate`);
				toast.success(response.data?.message);
			} catch (e) {
				toast.success(e.response.data?.message);
			}
		},
		[r]
	);

	const handleActivate = useCallback(
		async (userId: string) => {
			try {
				const response = await r.put(`/users/${userId}/activate`);
				toast.success(response.data?.message);
			} catch (e) {
				toast.success(e.response.data?.message);
			}
		},
		[r]
	);

	return (
		<Card {...props}>
			<CardHeader title="Data Management" />
			<CardContent sx={{ pt: 0 }}>
				<Button
					color="primary"
					variant="outlined"
					onClick={() => handleActivate(props.id)}
					sx={{ marginRight: 4 }}
				>
					Activate Account
				</Button>

				<Button
					color="error"
					variant="outlined"
					onClick={() => handleDeactivate(props.id)}
				>
					Deactivate Account
				</Button>
				<Box sx={{ mt: 1 }}>
					<Typography
						color="text.secondary"
						variant="body2"
					>
						Deactivate this customer’s aacount if they requested that, if not please be aware that
						what has been deactivated may never be brought back
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
