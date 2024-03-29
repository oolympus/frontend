import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import type { Loan } from 'src/types/loan';

import { LoanApplication } from 'src/sections/dashboard/loan/loan-drawer/loan-apply';
import { customersApi } from 'src/api/customers';
import { Customer } from 'src/types/customer';

interface LoanApplyDrawerProps {
	container?: HTMLDivElement | null;
	open?: boolean;
	onClose?: () => void;
	loan?: Loan;
}

export const LoanApplyDrawer: FC<LoanApplyDrawerProps> = (props) => {
	const { container, onClose, open, loan } = props;
	const [isApplying, setIsApplying] = useState<boolean>(false);
	const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

	const [customer, setCustomer] = useState<Customer | undefined>(undefined);

	const handleCustomerGet = useCallback(async (customerId: string) => {
		const response = await customersApi.getCustomer(customerId);
		setCustomer(response);
	}, []);

	useEffect(() => {
		handleCustomerGet(props.loan ? props.loan.borrowed_by : '');
	}, [handleCustomerGet, props.loan]);

	const onApply = useCallback(() => {
		setIsApplying(true);
	}, []);

	const onCancel = useCallback(() => {
		setIsApplying(false);
	}, []);

	let content: JSX.Element | null = null;

	if (loan) {
		content = (
			<div>
				<Stack
					alignItems="center"
					direction="row"
					justifyContent="space-between"
					sx={{
						px: 3,
						py: 2,
					}}
				>
					{customer ? (
						<LoanApplication
							customer={customer}
							onCancel={onCancel}
							onApply={onApply}
						/>
					) : null}
				</Stack>
			</div>
		);
	}

	if (lgUp) {
		return (
			<Drawer
				anchor="right"
				open={open}
				PaperProps={{
					sx: {
						position: 'relative',
						width: 500,
					},
				}}
				SlideProps={{ container }}
				variant="persistent"
			>
				{content}
			</Drawer>
		);
	}

	return (
		<Drawer
			anchor="left"
			hideBackdrop
			ModalProps={{
				container,
				sx: {
					pointerEvents: 'none',
					position: 'absolute',
				},
			}}
			onClose={onClose}
			open={open}
			PaperProps={{
				sx: {
					maxWidth: '100%',
					width: 400,
					pointerEvents: 'auto',
					position: 'absolute',
				},
			}}
			SlideProps={{ container }}
			variant="temporary"
		>
			{content}
		</Drawer>
	);
};

LoanApplyDrawer.propTypes = {
	container: PropTypes.any,
	onClose: PropTypes.func,
	open: PropTypes.bool,
	// @ts-ignore
	loan: PropTypes.object,
};
